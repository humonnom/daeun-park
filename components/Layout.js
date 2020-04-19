import React from "react";
import Link from "next/link";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <a>Layouts</a>
        <div>
          <h1>Pagename</h1>
          <Link href='/main'>
            <button className='btn'>Link</button>
          </Link>
        </div>
        <div className='container'>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
