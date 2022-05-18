import React from 'react'
import Header from './Header'

const Viewuser = () => {
    var userlist=[
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
              "lat": "29.4572",
              "lng": "-164.2990"
            }
          },
          "phone": "493-170-9623 x156",
          "website": "kale.biz",
          "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
          }
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
              "lat": "-31.8129",
              "lng": "62.5342"
            }
          },
          "phone": "(254)954-1289",
          "website": "demarco.info",
          "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
          }
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
              "lat": "-71.4197",
              "lng": "71.7478"
            }
          },
          "phone": "1-477-935-8478 x6430",
          "website": "ola.org",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
              "lat": "24.8918",
              "lng": "21.8984"
            }
          },
          "phone": "210.067.6132",
          "website": "elvis.io",
          "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
          }
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
              "lat": "-14.3990",
              "lng": "-120.7677"
            }
          },
          "phone": "586.493.6943 x140",
          "website": "jacynthe.com",
          "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
          }
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
              "lat": "24.6463",
              "lng": "-168.8889"
            }
          },
          "phone": "(775)976-6794 x41206",
          "website": "conrad.com",
          "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
          }
        },
        {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
              "lat": "-38.2386",
              "lng": "57.2232"
            }
          },
          "phone": "024-648-3804",
          "website": "ambrose.net",
          "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
          }
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      ]
  return (
    <div>
        <Header/>
        <div className="container">                                                                                         
        <div  className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                <div className="row g-3">                        

                        {userlist.map( (value,key)=>{
                            return<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                <center>3<img style={{width:250,height:250}} src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/></center>
                                    <div className="card-body">
                                        <p className="card-text">Name:{value.name}</p>
                                        <p className="card-text">Username:{value.username}</p>
                                        <p className="card-text">E-mail:{value.email}</p>
                                        <p className="card-text">Address:{value.address.street}</p>
                                        <p className="card-text">Address:{value.address.su}</p>
                                        <a href="#" class="btn btn-primary">SUBMIT</a>
                                    </div>
                                </div>
                          </div>
                        } )}      
                                                                                                                                                                                                                                         
                </div>
            </div>
        </div>
        </div>  

    </div>
  )
}

export default Viewuser