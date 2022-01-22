import React, { Component } from 'react'
import Button from '@mui/material/Button'
import {Card, CardActions, CardContent, Grid, TextField, Typography} from "@mui/material"
import { Box } from '@mui/system'
import { ThreeSixty } from '@mui/icons-material'
export default class Design extends Component {
  constructor(){
    super();
    this.state={
      email:"suprava@gmail.com"
    }
  }
  render() {
    return (
      <div>
        {/* <Button fullWidth variant='outlined'>LOGIN</Button> */}
        {/* <Grid container style={{border:"3px solid red"}}>
         <Grid item xs={12} md={6} lg={4} style={{border:"3px solid green"}}>
           first col
         </Grid>
         <Grid item xs={12} md={6} lg={4} style={{border:"3px solid yellow"}}>
           second col
         </Grid>
         <Grid item xs={12} md={6} lg={4} style={{border:"3px solid yellow"}}>
           Third col
         </Grid>
        </Grid> */}

         <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant='h4'  gutterbuttom>
                  Title
                </Typography>
                <Typography variant='body2' gutterBottom>
               {this.state.email}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant='contained' color='secondary'>
                  Read more
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant='h4' gutterbuttom>
                  Title
                </Typography>
                <Typography variant='body2' gutterBottom>
                As a CSS utility, the Typography component also supports all system properties. You can use them as props directly on the component.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant='contained' color='secondary'>
                  Read more
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant='h4' gutterbuttom>
                  Title
                </Typography>
                <Typography variant='body2' gutterBottom>
                As a CSS utility, the Typography component also supports all system properties. You can use them as props directly on the component.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant='contained' color='secondary'>
                  Read more
                </Button>
              </CardActions>
            </Card>
          </Grid>
         
        </Grid> 
        {/* <Grid container mt={5}>
          <Grid item xs={12} md={4} lg={4}>
            <Box boxShadow="2px 2px 5px red" textAlign="center" fontSize={30} color="red"  p={2}>
            As a CSS utility, the Typography component also supports all system properties. You can use them as props directly on the component.
            </Box>
          </Grid>
        </Grid> */}
        {/* <TextField size="small" fullWidth type="text" value={this.state.email} onChange={this.handleChange}/> */}
      </div>
    )
  }
}
