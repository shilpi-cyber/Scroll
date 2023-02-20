import React, { Component } from 'react'
import UserItem from './UserItem'

export class User extends Component {
results=  [
          {
            "gender": "female",
            "name": {
              "title": "Miss",
              "first": "Jennie",
              "last": "Nichols"
            },
            "location": {
              "street": {
                "number": 8929,
                "name": "Valwood Pkwy",
              },
              "city": "Billings",
              "state": "Michigan",
              "country": "United States",
              "postcode": "63104",
              "coordinates": {
                "latitude": "-69.8246",
                "longitude": "134.8719"
              },
              "timezone": {
                "offset": "+9:30",
                "description": "Adelaide, Darwin"
              }
            },
            "email": "jennie.nichols@example.com",
            "login": {
              "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
              "username": "yellowpeacock117",
              "password": "addison",
              "salt": "sld1yGtd",
              "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
              "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
              "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
            },
            "dob": {
              "date": "1992-03-08T15:13:16.688Z",
              "age": 30
            },
            "registered": {
              "date": "2007-07-09T05:51:59.390Z",
              "age": 14
            },
            "phone": "(272) 790-0888",
            "cell": "(489) 330-2385",
            "id": {
              "name": "SSN",
              "value": "405-88-3636"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/75.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
            "nat": "US"
          },
          {
            "gender": "female",
            "name": {
              "title": "Miss",
              "first": "Jennie",
              "last": "Nichols"
            },
            "location": {
              "street": {
                "number": 8929,
                "name": "Valwood Pkwy",
              },
              "city": "Billings",
              "state": "Michigan",
              "country": "United States",
              "postcode": "63104",
              "coordinates": {
                "latitude": "-69.8246",
                "longitude": "134.8719"
              },
              "timezone": {
                "offset": "+9:30",
                "description": "Adelaide, Darwin"
              }
            },
            "email": "jennie.nichols@example.com",
            "login": {
              "uuid": "7a0eed6-9430-4d68-901f-c0d4c1c3bf00",
              "username": "yellowpeacock117",
              "password": "addison",
              "salt": "sld1yGtd",
              "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
              "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
              "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
            },
            "dob": {
              "date": "1992-03-08T15:13:16.688Z",
              "age": 30
            },
            "registered": {
              "date": "2007-07-09T05:51:59.390Z",
              "age": 14
            },
            "phone": "(272) 790-0888",
            "cell": "(489) 330-2385",
            "id": {
              "name": "SSN",
              "value": "405-88-3636"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/75.jpg",
              "medium": "https://randomuser.me/api/portraits/men/46.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
            "nat": "US"
          },
          {
            "gender": "female",
            "name": {
              "title": "Miss",
              "first": "Jennie",
              "last": "Nichols"
            },
            "location": {
              "street": {
                "number": 8929,
                "name": "Valwood Pkwy",
              },
              "city": "Billings",
              "state": "Michigan",
              "country": "United States",
              "postcode": "63104",
              "coordinates": {
                "latitude": "-69.8246",
                "longitude": "134.8719"
              },
              "timezone": {
                "offset": "+9:30",
                "description": "Adelaide, Darwin"
              }
            },
            "email": "jennie.nichols@example.com",
            "login": {
              "uuid": "7a0eed16-9488-4d68-901f-c0d4c1c3bf00",
              "username": "yellowpeacock117",
              "password": "addison",
              "salt": "sld1yGtd",
              "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
              "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
              "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
            },
            "dob": {
              "date": "1992-03-08T15:13:16.688Z",
              "age": 30
            },
            "registered": {
              "date": "2007-07-09T05:51:59.390Z",
              "age": 14
            },
            "phone": "(272) 790-0888",
            "cell": "(489) 330-2385",
            "id": {
              "name": "SSN",
              "value": "405-88-3636"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/75.jpg",
              "medium": "https://randomuser.me/api/portraits/women/66.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
            "nat": "US"
          }
        ]

    constructor(){
        super();
        this.state={
          results: this.results,
          loading:false,
          // totalResults:0
        }
   }
   async componentDidMount(){
    console.log("shilpikaushik");
    let url="https://randomuser.me/api/?results=5000";
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({results: parsedData.results
})
   }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{color: 'blue'}}>User Details</h1>
        {/* <InfiniteScroll
    dataLength={this.state.results.length!=this.state.totalResults}
    next={this.fetchMoredata}
    hasMore={true}
    loader={<h4> Loading.....</h4>}
> */}


        <div className="row">
        {this.state.results.map((element)=>{
          return <div className="col-md-4" key={element.login.uuid}>
           <UserItem  name={element.name.first} email={element.email} password={element.login.password} username={element.login.username} imageUrl={element.picture.medium} detailsUrl={element.detailsUrl} />
            </div> 
            })}
        
        </div>
        {/* </InfiniteScroll> */}
        <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
      </div>
    )
  }
}

export default User