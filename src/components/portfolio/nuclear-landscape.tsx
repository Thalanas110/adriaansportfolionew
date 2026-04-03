export function NuclearLandscape() {
  const skylineBlocks = [
    { width: 56, height: 84 },
    { width: 44, height: 62 },
    { width: 68, height: 102 },
    { width: 36, height: 54 },
    { width: 72, height: 90 },
    { width: 48, height: 66 },
    { width: 40, height: 58 },
    { width: 64, height: 94 },
    { width: 50, height: 70 },
    { width: 58, height: 86 },
    { width: 42, height: 64 },
  ]

  const mobileRuins = [
    { width: '9%', height: '42%' },
    { width: '12%', height: '66%' },
    { width: '10%', height: '58%' },
    { width: '15%', height: '78%' },
    { width: '11%', height: '64%' },
    { width: '13%', height: '72%' },
    { width: '10%', height: '56%' },
  ]

  return (
    <div className="pointer-events-none fixed inset-0 z-[1]" aria-hidden="true">
      <div className="absolute inset-0 md:hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #070705 0%, #12160d 42%, #0d1009 72%, #070704 100%)',
          }}
        />

        <div
          className="absolute top-[10%] right-[10%] h-24 w-24 opacity-45"
          style={{
            background:
              'radial-gradient(circle, rgba(204,255,142,0.36) 0%, rgba(158,212,94,0.18) 44%, rgba(0,0,0,0) 72%)',
          }}
        />

        <div
          className="absolute inset-x-0 bottom-[33%] h-[17%] opacity-62"
          style={{
            background: '#13170f',
            clipPath:
              'polygon(0 84%, 9% 76%, 18% 82%, 29% 66%, 40% 74%, 52% 61%, 63% 72%, 74% 64%, 86% 78%, 100% 70%, 100% 100%, 0 100%)',
          }}
        />

        <div
          className="absolute inset-x-0 bottom-[24%] h-[15%] opacity-72"
          style={{
            background: '#0f120c',
            clipPath:
              'polygon(0 78%, 10% 73%, 20% 76%, 31% 68%, 41% 73%, 53% 64%, 64% 71%, 75% 66%, 87% 74%, 100% 70%, 100% 100%, 0 100%)',
          }}
        />

        <div className="absolute inset-x-0 bottom-[21%] h-[12%] px-2 flex items-end justify-between opacity-55">
          {mobileRuins.map((block, index) => (
            <div
              key={`${block.width}-${block.height}-${index}`}
              style={{
                width: block.width,
                height: block.height,
                background:
                  'linear-gradient(180deg, rgba(21, 26, 17, 0.9) 0%, rgba(9, 11, 8, 1) 100%)',
                borderTop: '1px solid rgba(142, 184, 98, 0.2)',
              }}
            />
          ))}
        </div>

        <div
          className="absolute bottom-[19%] left-[8%] h-[14%] w-[13%] opacity-68"
          style={{
            background:
              'linear-gradient(180deg, rgba(27, 33, 20, 0.92) 0%, rgba(10, 12, 8, 1) 100%)',
            clipPath: 'polygon(20% 100%, 0 0, 100% 0, 80% 100%)',
          }}
        />

        <div
          className="absolute bottom-[19%] right-[8%] h-[16%] w-[14%] opacity-72"
          style={{
            background:
              'linear-gradient(180deg, rgba(29, 36, 22, 0.92) 0%, rgba(10, 12, 8, 1) 100%)',
            clipPath: 'polygon(18% 100%, 0 0, 100% 0, 82% 100%)',
          }}
        />

        <div
          className="absolute inset-x-0 bottom-[34%] h-[22%] opacity-30"
          style={{
            background:
              'linear-gradient(180deg, rgba(39,46,32,0.78) 0%, rgba(15,18,12,0.95) 100%)',
          }}
        />

        <div
          className="absolute inset-x-0 bottom-[17%] h-[19%] opacity-18"
          style={{
            background:
              'repeating-linear-gradient(102deg, rgba(84, 118, 56, 0.28) 0 1px, transparent 1px 28px)',
          }}
        />

        <div
          className="absolute inset-x-0 bottom-0 h-[27%]"
          style={{
            background:
              'linear-gradient(180deg, rgba(18, 22, 14, 0.2) 0%, rgba(10, 11, 8, 0.95) 44%, #070704 100%)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 70% at 50% 60%, rgba(174, 230, 111, 0.2) 0%, rgba(0,0,0,0) 58%), radial-gradient(120% 90% at 50% 50%, rgba(0,0,0,0) 56%, rgba(0,0,0,0.42) 100%)',
          }}
        />
      </div>

      <div className="absolute inset-0 hidden md:block">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #060604 0%, #10150b 34%, #16140a 56%, #0c0d07 74%, #070704 100%)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(110% 55% at 50% 62%, rgba(188,255,92,0.18) 0%, rgba(175,255,98,0.1) 28%, rgba(141,184,88,0.05) 46%, rgba(0,0,0,0) 72%)',
          }}
        />

        <div
          className="absolute inset-x-0 bottom-[31%] h-[29%] opacity-70"
          style={{
            background: '#14150d',
            clipPath:
              'polygon(0 86%, 8% 74%, 16% 79%, 24% 62%, 34% 70%, 42% 52%, 52% 63%, 61% 48%, 72% 65%, 82% 56%, 92% 74%, 100% 66%, 100% 100%, 0 100%)',
            boxShadow: '0 0 60px rgba(148, 206, 80, 0.16)',
          }}
        />

        <div
          className="absolute inset-x-0 bottom-[21%] h-[16%] opacity-85"
          style={{
            background: '#0d0e08',
            clipPath:
              'polygon(0 78%, 10% 72%, 18% 76%, 28% 66%, 37% 74%, 47% 62%, 57% 73%, 66% 64%, 76% 75%, 86% 68%, 100% 77%, 100% 100%, 0 100%)',
          }}
        />

        <div className="absolute inset-x-0 bottom-[19%] flex items-end justify-between px-14 opacity-65">
          {skylineBlocks.map((block, index) => (
            <div
              key={`${block.width}-${block.height}-${index}`}
              className="relative"
              style={{
                width: `${block.width}px`,
                height: `${block.height}px`,
                background:
                  'linear-gradient(180deg, rgba(16,20,13,0.95) 0%, rgba(8,10,7,1) 100%)',
                borderTop: '1px solid rgba(156, 215, 89, 0.16)',
                boxShadow:
                  '0 -1px 0 rgba(138, 186, 84, 0.16), 0 0 18px rgba(99, 130, 62, 0.2)',
              }}
            >
              <div
                className="absolute inset-x-1 top-1 h-px"
                style={{
                  background: 'rgba(192, 245, 122, 0.22)',
                }}
              />
            </div>
          ))}
        </div>

        <div
          className="absolute bottom-[20%] left-[23%] h-[27%] w-[10%] opacity-85"
          style={{
            background:
              'linear-gradient(180deg, rgba(31,36,24,0.95) 0%, rgba(11,13,9,1) 100%)',
            clipPath: 'polygon(18% 100%, 0 0, 100% 0, 82% 100%)',
            boxShadow: '0 0 30px rgba(148, 207, 85, 0.14)',
          }}
        >
          <div
            className="absolute -top-12 left-[12%] h-20 w-[76%] rounded-full blur-xl"
            style={{ background: 'rgba(186, 200, 170, 0.32)' }}
          />
        </div>

        <div
          className="absolute bottom-[20%] right-[21%] h-[31%] w-[12%] opacity-88"
          style={{
            background:
              'linear-gradient(180deg, rgba(34,39,26,0.95) 0%, rgba(10,12,8,1) 100%)',
            clipPath: 'polygon(16% 100%, 0 0, 100% 0, 84% 100%)',
            boxShadow: '0 0 36px rgba(154, 226, 85, 0.16)',
          }}
        >
          <div
            className="absolute -top-16 left-[8%] h-24 w-[84%] rounded-full blur-2xl"
            style={{ background: 'rgba(186, 212, 165, 0.35)' }}
          />
        </div>

        <div
          className="absolute inset-x-0 bottom-0 h-[24%]"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,25,14,0.15) 0%, rgba(12,13,9,0.95) 45%, #070704 100%)',
          }}
        />

        <div
          className="absolute inset-x-0 bottom-[7%] h-[9%] opacity-35"
          style={{
            background:
              'repeating-linear-gradient(112deg, rgba(86,120,54,0.4) 0 2px, transparent 2px 38px), repeating-linear-gradient(64deg, rgba(79,102,55,0.3) 0 1px, transparent 1px 34px)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(130% 90% at 50% 50%, rgba(0,0,0,0) 54%, rgba(0,0,0,0.44) 100%)',
          }}
        />
      </div>
    </div>
  )
}