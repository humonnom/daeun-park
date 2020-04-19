import React from "react";
import Link from "next/link";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <a className='nav'>Navigation var</a>
        <div>
          <Link href='/category/sculpture'>
            <a className='nav-text'>sculpture</a>
          </Link>
        </div>
        <div>
          <Link href='/category/text'>
            <a className='nav-text'>text</a>
          </Link>
        </div>
        <div>
          <Link href='/category/video'>
            <a className='nav-text'>video</a>
          </Link>
        </div>
        <div>
          <Link href='/category/cv'>
            <a className='nav-text'>cv</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Layout;
