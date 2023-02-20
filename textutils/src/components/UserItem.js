import React, { Component } from 'react'

export class UserItem extends Component {
  render() {
    let {name , email, password,username, imageUrl , detailsUrl}= this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name -{name}</h5>
    <p className="card-text">Email-{email}</p>
    <p className="card-text">Username - {username}</p>
    <p className="card-text">Password - {password}</p>
    <a href={detailsUrl} target="_blank" className="btn btn-primary"> Read More </a>
  </div>
</div>
      </div>
    )
  }
}

export default UserItem