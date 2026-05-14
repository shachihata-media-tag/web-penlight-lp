import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='bg-transparent py-12 border-t border-border/50 text-sm text-muted'>
      <div className='container-custom'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
          <div className='col-span-1 md:col-span-2'>
            <Image src='/shachihata-logo.png' alt='シヤチハタ株式会社' width={120} height={40} className='h-8 w-auto object-contain mb-4 brightness-0' />
            <p className='leading-relaxed opacity-80'>
              あなたの「音」がグッズになる。クリエイター・配信者から企業まで、
              <br />
              音響連動グッズの制作・導入をサポートします。
            </p>
          </div>
          <nav aria-label="プロダクトナビゲーション">
            <h4 className='text-text font-bold mb-4'>プロダクト</h4>
            <ul className='space-y-2'>
              <li>
                <Link href='#hero' className='hover:text-text transition-colors'>
                  トップ
                </Link>
              </li>
              <li>
                <Link href='#lineup' className='hover:text-text transition-colors'>
                  製品ラインナップ
                </Link>
              </li>
              <li>
                <Link href='#demos' className='hover:text-text transition-colors'>
                  デモ体験
                </Link>
              </li>
              <li>
                <Link href='#demos' className='hover:text-text transition-colors'>
                  デモ体験
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="企業情報ナビゲーション">
            <h4 className='text-text font-bold mb-4'>会社情報</h4>
            <ul className='space-y-2'>
              <li>
                <a href='https://www.shachihata.co.jp/' target='_blank' rel='noopener noreferrer' className='hover:text-text transition-colors'>
                  コーポレートサイト
                </a>
              </li>
              <li>
                <a href='https://www.shachihata.co.jp/privacy/' target='_blank' rel='noopener noreferrer' className='hover:text-text transition-colors'>
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Company Overview for AI Search / Trust */}
        <div className='border-t border-border/50 py-8 mb-4'>
          <h4 className='text-text font-bold mb-4 text-sm'>運営会社概要</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted/80 leading-relaxed'>
            <div>
              <p>
                <span className='font-semibold text-text/80'>社名：</span>シヤチハタ株式会社 (Shachihata Inc.)
              </p>
              <p>
                <span className='font-semibold text-text/80'>創業：</span>1925年 (大正14年)
              </p>
              <p>
                <span className='font-semibold text-text/80'>設立：</span>1941年 (昭和16年) 9月
              </p>
            </div>
            <div>
              <p>
                <span className='font-semibold text-text/80'>代表者：</span>代表取締役 舟橋 正剛
              </p>
              <p>
                <span className='font-semibold text-text/80'>本社所在地：</span>〒451-0021 愛知県名古屋市西区天塚町四丁目69番地
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 gap-2'>
          <p>&copy; {new Date().getFullYear()} Shachihata Inc. All rights reserved.</p>
          <p className='text-xs text-muted/60'>最終更新: 2026年5月2日</p>
        </div>
      </div>
    </footer>
  );
}
