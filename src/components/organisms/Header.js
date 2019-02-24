import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import HeaderBlock from '../atom/Header'
import { getCategory } from '../../store/actions/getCategoryAction'
import { getSelectedCategory } from '../../store/actions/getSelectedCategoryAction'
import '../../styles/Header.css'


class Header extends PureComponent {
  state = {
    isOpen: true
  }

  mouseLeave = () => {
    this.setState({isOpen: false})
  }

  categoryClick = () => {
    this.props.getCategory()
    this.setState({isOpen: true})
  }

  render(){
    const { isOpen } = this.state
    const { getCategory ,category } = this.props

    return (
      <HeaderBlock>
        <div className="header-logo">
          <img src="/img/origin/1550974282-logo.jpg" alt="logo" />
          <Link to='/'>Lyceum's Odessa News</Link>
        </div>
        <div className="header-nav">
          <ul className="header-main-nav">
            <li onClick={this.categoryClick}>Category
              {
                isOpen && category && <ul className='Category' onMouseLeave={this.mouseLeave}>
                  {category.map(item => {
                    console.log(item);
                    return <li key={item.category_id}>{item.category_name}</li>
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
export default connect(mapState, { getCategory, getSelectedCategory })(Header)
