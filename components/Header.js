import Link from 'next/link'
import '../index.css'
const Header = () => (
  <div className='head'>
    <div className='logo'>
      <img src='https://b-gold-cdn.xitu.io/v3/static/img/simplify-logo.3e3c253.svg' alt=''/>
    </div>
    <div className='index'>
      <span>首页</span>

    </div>
    <input type='text' />
    <div className='login'>
      <span>登录 · 注册</span>
    </div>
  </div>
)

export default Header