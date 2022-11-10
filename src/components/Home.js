import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Center,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function WithBackgroundImage() {
    const navigate = useNavigate();
    const cardNavigate =()=>{
        navigate('./Card')
    } 
  return (
    <Flex
    className='con'
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
           lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '6xl' })}
            >
              نضمـن لك العرض الافضــل
          </Text>
            <Text className='tex1'>
             للحين تلف على مكاتب التأمين تدور الأرخص ؟ جربنا وقارن بين اسعار شركات التأمين
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'rgba(71, 168, 71, 0.767)'}
              rounded={'full'}
            // textAlign={'center'}
             
              color={'white'}
              
              margin={20}
              padding={2}
              _hover={{ bg: 'gray' }}
              onClick={cardNavigate} >
              لمزيد من المعلومات
            </Button>
            
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}