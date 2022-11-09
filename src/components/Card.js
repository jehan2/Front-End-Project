import React, {useEffect, useState} from "react"
import axios from "axios"

// import {
//     MDBCard,
//     MDBCardBody,
//     MDBCardTitle,
//     MDBCardText,
//     MDBCardImage,
//     MDBBtn
//   } from 'mdb-react-ui-kit';
import { Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue

  } from '@chakra-ui/react';

function Card() {
    const[state, setstate]= React.useState([])


  React.useEffect(() => {
    axios.get("https://6362424b66f75177ea2a998e.mockapi.io/nsurances1").then((res)=>{
      console.log(res.data);
      setstate(res.data);
      })
  }, [])
  return (
    <div>
        <div className="api-con">
        { state.map((items)=>{
      return(
    //     <div className="img-con">
    //     <img src={items.img}></img>
    //     <p>{items.title}</p>
    //     <p>{items.company1}</p> <button>اشترك</button>
    //     {/* <p> {items.fName}</p>
    //     <p> {items.lName}</p> */}
        
    //     </div>
    

    //   </div>
    //     </div>
    ////////
    // <Grid templateColumns="repeat(3, 5fr)" gap="16">
    // <MDBCard>
        
    //   <MDBCardImage className="img-con"src= {items.img} position='top' alt='...' />
    //   <MDBCardBody>
    //     <MDBCardTitle>{items.title}</MDBCardTitle>
    //     <MDBCardText>
         
    //     </MDBCardText>
    //     <MDBBtn href='#'>Button</MDBBtn>
    //   </MDBCardBody>
    
    // </MDBCard>
    // </Grid>


    ////////////////////////
    <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
         bg={'rgba(255, 255, 255, 0.5)'}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'250px'}
            w={'full'}
            src={items.img }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={5}>
            {/* <Avatar
              size={'xl'}
              src={{props.img}}
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            /> */}
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
               { items.title}
              </Heading>
              <Text color={'gray.500'}>
                <br/>
                {/* {props.disc} */}
              </Text>
            </Stack>
              <Link to={`/Details/${items.id}`}>
            <Button
              w={'full'}
              mt={8}
              bg={'rgba(71, 168, 71, 0.767)'}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              >
             المزيد..
            </Button></Link>
          </Box>
        </Box>
      </Center>


      )})}      
    </div>
        
    </div>
  )
}

export default Card;