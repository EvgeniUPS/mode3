import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import HeaderBlock from '../atom/Header'
import { getCategory } from '../../store/actions/getCategoryAction'
import '../../styles/Header.css'
import Category from '../Category'

class Header extends PureComponent {
  state = {
    isOpen: true
  }

  render(){
    const { isOpen } = this.state
    const { getCategory, category } = this.props

    return (
      <HeaderBlock>
        <div className="header-logo">
          <img src="/img/logo.jpg" alt="logo" />
          <Link to='/'>Lyceum's Odessa News</Link>
        </div>
        <div className="header-nav">
          <ul>
            <li onClick={getCategory}>
              Category
              {
                isOpen && category && <ul className='Category'>
                  {category.map(item => {
                    return <li key={item.id}>{item.name}</li>
                  })}
                </ul>
              }
            </li>

            <li><Link to='/about'>About</Link></li>
            <li><Link to='/login'>SignUp/Login</Link></li>
          </ul>
        </div>
      </HeaderBlock>
    )
  }
}
const mapState = ({ category }) => (
  category
)
export default connect(mapState, { getCategory })(Header)