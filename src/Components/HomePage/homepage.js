import './homepage.css';
import {Box, Button, Image,Text} from '@chakra-ui/react';
const HomePage = () => {
    return (
      <Box className='bg'>
        <Image className="image" src='/images/logo.svg'/>
        <Box className='tool'>
            <Text className="menu">Menu</Text>
            <Text className="menu">Home</Text>
            <Text className="menu">About Us</Text>
            <Text className="menu">Contact Us</Text>
        </Box>
        <Image className="line" src='/images/line_1.svg'/>
        <Button className="signup">Sign Up</Button>
        <Image className="eclipse" src='/images/Eclipse_1.svg'></Image>
        <Image className="bright_1" src='/images/bright_1.svg'></Image>
        <Image className="eclipse_2" src='/images/Eclipse_2.svg'></Image>
        <Image className="bright_2" src='/images/bright_2.svg'></Image>

        <Text className="title">Elevate Your Business. Ignite Success</Text>
        <Text className="subtitle">Lorem ipsum dolor sit amet consectetur. Vel laoreet ornare tellus erat a a sapien enim lobortis. Sit nec pulvinar mattis dolor varius in.</Text>
        <Button className="getstarted">Get Started</Button>
        


    </Box>
        );
    }
export default HomePage;
     