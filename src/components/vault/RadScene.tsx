import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const RAD = new THREE.Color("#f0b429");
const SIGNAL = new THREE.Color("#7ddc3a");

function useScrollRef() {
  const ref = useRef(0);
  useFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    ref.current = max > 0 ? window.scrollY / max : 0;
  });
  return ref;
}

/** Reactor core: nested wireframe shells that spin and dilate on scroll. */
function ReactorCore() {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const scroll = useScrollRef();
  const { viewport } = useThree();
  const small = viewport.aspect < 1.05;

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const s = scroll.current;
    const g = group.current;
    if (g) {
      g.rotation.y += dt * 0.16;
      g.rotation.x = Math.sin(t * 0.22) * 0.16 + s * 0.9;
      g.position.y = -s * 4.4 + Math.sin(t * 0.6) * 0.08 + (small ? 2.4 : 0);
      g.position.x = small ? 0 : viewport.width * 0.27 + s * -1.2;
      const k = (small ? 0.4 : 0.58) * (1 + s * 0.3);
      g.scale.setScalar(k);
      const mx = state.pointer.x * 0.25;
      const my = state.pointer.y * 0.2;
      g.rotation.z += (mx * 0.35 - g.rotation.z) * 0.05;
      g.rotation.x += my * 0.2 * 0.05;
    }
    if (inner.current) {
      inner.current.rotation.x -= dt * 0.5;
      inner.current.rotation.z += dt * 0.32;
      const pulse = 1 + Math.sin(t * 2.1) * 0.05;
      inner.current.scale.setScalar(pulse);
    }
    if (shell.current) {
      shell.current.rotation.y -= dt * 0.22;
      shell.current.rotation.x += dt * 0.1;
    }
    if (ring.current) {
      ring.current.rotation.z += dt * 0.6;
      ring.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.5) * 0.35 + s * 1.4;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color={RAD} wireframe transparent opacity={0.6} />
      </mesh>

      <mesh>
        <icosahedronGeometry args={[0.62, 0]} />
        <meshStandardMaterial
          color={"#2a1f06"}
          emissive={RAD}
          emissiveIntensity={1.1}
          roughness={0.35}
          metalness={0.8}
          flatShading
        />
      </mesh>

      <mesh ref={shell}>
        <torusKnotGeometry args={[1.85, 0.035, 240, 10, 2, 3]} />
        <meshStandardMaterial
          color={SIGNAL}
          emissive={SIGNAL}
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.6}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh ref={ring}>
        <torusGeometry args={[2.65, 0.012, 8, 160]} />
        <meshBasicMaterial color={RAD} transparent opacity={0.45} />
      </mesh>

      <mesh rotation={[Math.PI / 2.4, 0.4, 0]}>
        <torusGeometry args={[3.15, 0.008, 8, 160]} />
        <meshBasicMaterial color={SIGNAL} transparent opacity={0.28} />
      </mesh>


      <pointLight position={[0, 0, 0]} intensity={9} distance={9} color={"#ffb703"} />
    </group>
  );
}

/** Slow drifting fallout particulate. */
function Fallout({ count = 900 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const scroll = useScrollRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 26;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14 - 3;
    }
    return arr;
  }, [count]);

  useFrame((state, dt) => {
    const p = points.current;
    if (!p) return;
    const pos = p.geometry.attributes.position as THREE.BufferAttribute;
    const a = pos.array as Float32Array;
    for (let i = 1; i < a.length; i += 3) {
      a[i] -= dt * 0.28;
      if (a[i] < -9) a[i] = 9;
    }
    pos.needsUpdate = true;
    p.rotation.y = state.clock.elapsedTime * 0.02 + scroll.current * 0.8;
    p.position.y = scroll.current * 3;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={RAD}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/** Infinite receding wire grid, parallaxed by scroll. */
function WireGrid() {
  const grid = useRef<THREE.GridHelper>(null);
  const scroll = useScrollRef();

  const helper = useMemo(() => {
    const g = new THREE.GridHelper(60, 60, RAD, SIGNAL);
    const m = g.material as THREE.Material;
    m.transparent = true;
    m.opacity = 0.12;
    return g;
  }, []);

  useFrame(() => {
    if (grid.current) {
      grid.current.position.y = -6 + scroll.current * 7;
      grid.current.position.z = -6 + scroll.current * 12;
      grid.current.rotation.y = scroll.current * 0.5;
    }
  });

  return <primitive object={helper} ref={grid} />;
}

export default function RadScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 8], fov: 48 }}
    >
      <fog attach="fog" args={["#0a0906", 9, 24]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} color={"#ffd166"} />
      <ReactorCore />
      <Fallout />
      <WireGrid />
    </Canvas>
  );
}
