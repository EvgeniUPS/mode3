import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import HeaderBlock from '../atom/Header'
import { getCategory } from '../../store/actions/getCategoryAction'
import '../../styles/Header.css'
import AdminPanel from '../../pages/AdminPanel'

class Header extends PureComponent {
  state = {
    isAdmin: false,
    isOpen: true,
  }

  mouseLeave = () => {
    this.setState({ isOpen: false })
  }

  categoryClick = () => {
    this.props.getCategory()
    this.setState({ isOpen: true })
  }

  render() {
    const { isOpen, isAdmin } = this.state
    const { getCategory, category } = this.props

    return (
      <HeaderBlock>
        <div className="header-logo">
          <img src="/img/logo.jpg" alt="logo" />
          <Link to="/">Lyceum's Odessa News</Link>
        </div>
        <div className="header-nav">
          <ul className="header-main-nav">
            <li onClick={this.categoryClick}>
              Category
              {isOpen && category && (
                <ul className="Category" onMouseLeave={this.mouseLeave}>
                  {category.map(item => {
                    return <li key={item.category_id}>{item.category_name}</li>
                  })}
                </ul>
              )}
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">SignUp/Login</Link>
            </li>
            {isAdmin && (
              <li>
                <Link to="/AdminPanel">ad</Link>
              </li>
            )}
          </ul>
        </div>
      </HeaderBlock>
    )
  }
}
const mapState = ({ category }) => category
export default connect(
  mapState,
  { getCategory }
)(Header)
