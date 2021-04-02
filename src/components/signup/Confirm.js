// import React, { Component } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
// import { List, ListItem, ListItemText } from "@material-ui/core/";
// import Button from "@material-ui/core/Button";
// import { Form, Container, Col, Row } from "react-bootstrap";
// export class Confirm extends Component {
//   continue = (e) => {
//     e.preventDefault();
//     // PROCESS FORM //
//     this.props.nextStep();
//   };

//   back = (e) => {
//     e.preventDefault();
//     this.props.prevStep();
//   };

//   render() {
//     const {
//       values: { firstName, lastName, email, occupation, city, bio },
//     } = this.props;
//     return (
//       <MuiThemeProvider>
//         <>
//           <Container>
//             <Row>
//               <Col lg={6}></Col>
//               <Col lg={6}>
//                 <h3 className="mt-4 mb-3">Personal Details</h3>
//                 <Form>
//                   <AppBar title="Confirm User Data" />
//                   <List>
//                     <ListItem>
//                       <ListItemText
//                         primary="First Name"
//                         secondary={firstName}
//                       />
//                     </ListItem>
//                     <ListItem>
//                       <ListItemText primary="Last Name" secondary={lastName} />
//                     </ListItem>
//                     <ListItem>
//                       <ListItemText primary="Email" secondary={email} />
//                     </ListItem>
//                     <ListItem>
//                       <ListItemText
//                         primary="Occupation"
//                         secondary={occupation}
//                       />
//                     </ListItem>
//                     <ListItem>
//                       <ListItemText primary="City" secondary={city} />
//                     </ListItem>
//                     <ListItem>
//                       <ListItemText primary="Bio" secondary={bio} />
//                     </ListItem>
//                   </List>
//                   <br />

//                   <Button
//                     color="secondary"
//                     variant="contained"
//                     onClick={this.back}
//                   >
//                     Back
//                   </Button>

//                   <Button
//                     color="primary"
//                     variant="contained"
//                     onClick={this.continue}
//                   >
//                     Confirm & Continue
//                   </Button>
//                 </Form>
//               </Col>
//             </Row>
//           </Container>
//         </>
//       </MuiThemeProvider>
//     );
//   }
// }

// export default Confirm;
