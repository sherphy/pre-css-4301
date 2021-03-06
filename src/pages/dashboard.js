//https://www.youtube.com/watch?v=leD2RSJ-AfY
//contains the live camera viewable on the homepage, do let me know if you want to change the dashboard-Davinod

// const Dashboard = () => (
//     <div>
//         <h1> Welcome back, </h1>
//         <h3> Timelapse </h3>
//     </div>
// );

//for user database
// import firebase from "../util/firebase";
// import React, { useState } from "react";
import React from 'react'
import { db } from '../util/firebase'
import Typography from "@material-ui/core/Typography";
import "./dashboard.css"
import firebase from 'firebase/compat/app';
import "firebase/auth";
// import { makeStyles, useTheme } from "@material-ui/styles";
import withStyles from '@material-ui/core/styles/withStyles';
import Streak from '../util/streak.js'

const useStyles = theme => ({
    title: {
        marginTop: 0,
        marginBottom: 10,
      },
      container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "8px",
        padding: "20px 20px 20px 20px",
        background: "rgba(250, 243, 221, 0.85)",
        borderRadius: "10px",
      },
      bodyText: {
        marginTop: 10,
        marginBottom: 10,
      },
      admin: {
        display: "inline-block",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "8px",
        padding: "20px 20px 20px 20px",
        background: "rgba(250, 243, 221, 0.85)",
        borderRadius: "10px",
      }
  });

class Dashboard extends React.Component{
  
    state = { 
        SignedUpUsersData: null 
    }

    componentDidMount(){
        db.collection('SignedUpUsersData')
        .get()
        .then( snapshot => {
            const SignedUpUsersData = []
            snapshot.forEach( doc => {
                const data = doc.data()
                SignedUpUsersData.push(data)
            })
            this.setState({SignedUpUsersData: SignedUpUsersData})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        const {classes} = this.props;
        let user = firebase.auth().currentUser;
        return(
            <div class={classes.title}>
                {
                    this.state.SignedUpUsersData && this.state.SignedUpUsersData.slice(0,1).map(SignedUpUsersData => {
                        return(
                            <div>
                              <div class={classes.container}>
                                {/*<p>{SignedUpUsersData.Email}</p>*/} 
                                <Typography align="center" variant="h3" fontWeight="fontWeightBold" className={classes.title}>Timelapse</Typography>
                                <Typography inline variant="h5" className={classes.bodyText}>current user: {user.email} </Typography>
                                <Streak/>
                                
                                {(user.email === 'testuser2@testuser2.com' || user.email === 'testuser4@testuser4.com') &&
                                <>
                                   <Typography inline variant="h4" className={classes.bodyText}>Camera Bottom Middle</Typography>
                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/bottom_middle.gif?alt=media&token=f6fad9b3-7f57-460b-8b47-d385f75a65ed"></iframe>
                                  </div>
                                </>
                                }

                                {user.email === 'testuser1@testuser1.com' &&
                                <>
                                   <Typography inline variant="h4" className={classes.bodyText}>Camera Bottom Left</Typography>
                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/bottom_left.gif?alt=media&token=b610efd0-929d-4e52-88c8-d0773ad6e134" frameborder="0" scrolling="no" width="432" height="768" align="center"></iframe>
                                  </div>
                                </>
                                }

                                {user.email === 'testuser3@testuser3.com' &&
                                <>
                                   <Typography inline variant="h4" className={classes.bodyText}>Camera Bottom Right</Typography>
                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/bottom_right.gif?alt=media&token=ca1ac792-7c37-4b59-9ceb-ff913ff79ec4"></iframe>
                                  </div>
                                </>
                                }

                                {user.email === '' &&
                                <>
                                   <Typography inline variant="h4" className={classes.bodyText}>Camera Middle Left</Typography>
                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/middle_left.gif?alt=media&token=d6f58cdb-72ee-456f-bf06-e128cd343dc1"></iframe>
                                  </div>
                                </>
                                }

                                {user.email === '' &&
                                <>
                                   <Typography inline variant="h4" className={classes.bodyText}>Camera Middle Middle</Typography>
                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/middle_middle.gif?alt=media&token=e49a244d-8dbe-43c9-89e0-93f4dafdf257"></iframe>
                                  </div>
                                </>
                                }
                                
                                {user.email === '' &&
                                <>
                                   <Typography inline variant="h4" className={classes.bodyText}>Camera Middle Right</Typography>
                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/middle_right.gif?alt=media&token=f7a73850-d499-49cb-87f8-7f07b1ac9194"></iframe>
                                  </div>
                                </>
                                }

                                {user.email === '' &&
                                <>
                                   <Typography inline variant="h4" className={classes.bodyText}>Camera Top Left</Typography>
                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/top_left.gif?alt=media&token=6e909725-fd07-4309-bfff-2683b5a3c633"></iframe>
                                  </div>
                                </>
                                }

                                {user.email === '' &&
                                <>
                                   <Typography inline variant="h4" className={classes.bodyText}>Camera Top Middle</Typography>
                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/top_middle.gif?alt=media&token=d7c37234-a6e6-4b12-8d1f-701d4fbbf885"></iframe>
                                  </div>
                                </>
                                }

                                {user.email === '' &&
                                <>
                                   <Typography inline variant="h4" className={classes.bodyText}>Camera Top Right</Typography>
                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/top_right.gif?alt=media&token=94f9d81c-fbcf-4693-b197-f6a2343b5d90"></iframe>
                                  </div>
                                </>
                                }
                              </div>
                                {(user.email === 'yenshihcheng@gmail.com' || user.email === 'e0324120@u.nus.edu' || user.email === 'admintest1@admintest1.com') &&
                                <>
                                <div class={classes.admin}>
                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/top_left.gif?alt=media&token=6e909725-fd07-4309-bfff-2683b5a3c633" frameborder="0" scrolling="no" width="432" height="768" align="left"></iframe>
                                  <Typography align="center" variant="h4" fontWeight="fontWeightBold" className={classes.title}>Camera Top Left</Typography>
                                  </div>

                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/top_middle.gif?alt=media&token=d7c37234-a6e6-4b12-8d1f-701d4fbbf885" frameborder="0" scrolling="no" width="432" height="768" align="left"></iframe>
                                  <Typography align="center" variant="h4" fontWeight="fontWeightBold" className={classes.title}>Camera Top Middle</Typography>
                                  </div>

                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/top_right.gif?alt=media&token=94f9d81c-fbcf-4693-b197-f6a2343b5d90" frameborder="0" scrolling="no" width="432" height="768" align="left"></iframe>
                                  <Typography align="center" variant="h4" fontWeight="fontWeightBold" className={classes.title}>Camera Top Right</Typography>
                                  </div>

                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/middle_left.gif?alt=media&token=d6f58cdb-72ee-456f-bf06-e128cd343dc1" frameborder="0" scrolling="no" width="432" height="768" align="left"></iframe>
                                  <Typography align="center" variant="h4" fontWeight="fontWeightBold" className={classes.title}>Camera Middle Left</Typography>
                                  </div>

                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/middle_middle.gif?alt=media&token=e49a244d-8dbe-43c9-89e0-93f4dafdf257" frameborder="0" scrolling="no" width="432" height="768" align="left"></iframe>
                                  <Typography align="center" variant="h4" fontWeight="fontWeightBold" className={classes.title}>Camera Middle Middle</Typography>
                                  </div>
                                
                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/middle_right.gif?alt=media&token=f7a73850-d499-49cb-87f8-7f07b1ac9194" frameborder="0" scrolling="no" width="432" height="768" align="left"></iframe>
                                  <Typography align="center" variant="h4" fontWeight="fontWeightBold" className={classes.title}>Camera Middle Right</Typography>
                                  </div>

                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/bottom_left.gif?alt=media&token=b610efd0-929d-4e52-88c8-d0773ad6e134" frameborder="0" scrolling="no" width="432" height="768" align="left"></iframe>
                                  <Typography align="center" variant="h4" fontWeight="fontWeightBold" className={classes.title}>Camera Bottom Left</Typography>
                                  </div>

                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/bottom_middle.gif?alt=media&token=f6fad9b3-7f57-460b-8b47-d385f75a65ed" frameborder="0" scrolling="no" width="432" height="768" align="left"></iframe>
                                  <Typography align="center" variant="h4" fontWeight="fontWeightBold" className={classes.title}>Camera Bottom Middle</Typography>
                                  </div>

                                  <div class="box">
                                  <iframe src="https://firebasestorage.googleapis.com/v0/b/eg4301-urban-farming.appspot.com/o/bottom_right.gif?alt=media&token=ca1ac792-7c37-4b59-9ceb-ff913ff79ec4" frameborder="0" scrolling="no" width="432" height="768" align="left"></iframe>
                                  <Typography align="center" variant="h4" fontWeight="fontWeightBold" className={classes.title}>Camera Bottom Right</Typography>
                                  </div>

                                </div>
                                </>
                                }  
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default withStyles(useStyles)(Dashboard);