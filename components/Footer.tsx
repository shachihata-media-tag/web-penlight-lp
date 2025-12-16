export function Footer() {
  return (
    <footer className="bg-surface py-12 border-t border-white/5 text-sm text-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-text font-bold text-lg mb-4">SHACHIHATA</h3>
            <p className="leading-relaxed opacity-80">
              音響連動WEBペンライト<br />
              世界中の会場と配信を、ひとつの光でつなぐ。
            </p>
          </div>
          <div>
            <h4 className="text-text font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-text transition-colors">Top</a></li>
              <li><a href="#features" className="hover:text-text transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-text transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-text font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.shachihata.co.jp/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-text transition-colors"
                >
                  Corporate Site
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-text transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p>&copy; {new Date().getFullYear()} Shachihata Inc. All rights reserved.</p>
          <p className="text-xs mt-2 md:mt-0 opacity-50">
            Design for intended functionality demo only.
          </p>
        </div>
      </div>
    </footer>
  );
}
