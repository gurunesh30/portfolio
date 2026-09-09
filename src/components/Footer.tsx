export default function Footer() {
  return (
    <footer className="bg-[#111] border-t border-[#1e1e1e] py-8">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-[#767676]">
          © 2026 Gurunesh M. Built with React + Bun.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/gurunesh30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#767676] hover:text-[#faf7f3] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/gurunesh30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#767676] hover:text-[#faf7f3] transition-colors"
          >
            LeetCode
          </a>
          <a
            href="mailto:guruneshm1@gmail.com"
            className="text-[13px] text-[#767676] hover:text-[#faf7f3] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
