/*
这部分是导航栏
*/
"use client"
import Link from "next/link";
import Logo from "./Logo";

import siteMetadata from "@/src/utils/siteMetaData";
import { useState } from "react";
import Image from "next/image";

//设置导航按钮悬停时的伪类选择器：
const opterhover = 'hover:text-accent transition-colors duration-300 '
const Header = () => {

  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click)
  }
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
      <Logo />

      <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
              }}

            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1
              }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
              }}
            >&nbsp;</span>
          </div>

        </div>
      </button>
{/* 移动端导航栏 */}
      <nav className=" w-full max-w-xs py-3 px-4 border border-solid border-dark rounded-full font-medium capitalize  items-center flex overflow-x-auto sm:hidden
fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
transition-all ease duration-300
"
        style={{
          top: click ? "1rem" : "-5rem"
        }}

      >
        <Link href="/contact" className={opterhover}>博客&nbsp;</Link>
        <br/>
        <h1>移动端不支持查看更多内容，请在桌面查看</h1>
      </nav>
        {/* 桌面端的导航栏 */}
      <nav className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <div >
          <Link href="/" className={opterhover}>&nbsp;&nbsp;主页&nbsp;&nbsp;</Link>
          <Link href="/about" className={opterhover}>&nbsp;&nbsp;关于&nbsp;&nbsp;</Link>
          <Link href="/techblog" className={opterhover}>&nbsp;&nbsp;技术类博客&nbsp;&nbsp;</Link>
          <Link href="/essay" className={opterhover}>&nbsp;&nbsp;随笔&nbsp;&nbsp;</Link>

          <Link href="/mysite" className={opterhover}>&nbsp;自留地&nbsp;</Link>
          <Link href="/download" className={opterhover}>&nbsp;下载&nbsp;</Link>
        </div>
      </nav>
      <div className=" hidden sm:flex items-center">
        {/* 头部右侧：显示当前日期、时间和星期几 */}
        <div className="flex items-center space-x-2 text-sm text-dark dark:text-light">
          <span>{new Date().toLocaleDateString('zh-CN')}</span>
          <span>{['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][new Date().getDay()]}</span>
        </div>
        
      </div>
    </header>
  )
}

export default Header;