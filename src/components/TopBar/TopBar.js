import React from 'react'
import { 
    TopBarContainer, 
    Icon, 
    CloseIcon, 
    TopBarWrapper, 
    TopBarMenu, 
    TopBarLink,
    Contact,
    ContactLink,
    CustomButton,
    TopNavButton
} from '../TopBar/TopBarElements'
import { BsChevronRight } from 'react-icons/bs'


const TopBar = ({ isOpen, toggle }) => {
    return (
    <>
    <TopBarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon />
    </Icon>

    <TopBarWrapper>
    <TopBarMenu>
    <TopBarLink 
        to="about"
        activeClass="active"
        onClick={toggle}
        >
        About.
    </TopBarLink>

    <TopBarLink to="projects"
     activeClass="active"
     spy={true}
     smooth={true}
     offset={-80}
     duration={500}
     onClick={toggle}
     >
        Projects.
    </TopBarLink>

    <TopBarLink to="contact"
    activeClass="active"
    onClick={toggle}
    >
        Contact.
    </TopBarLink>

    <Contact>
    <ContactLink to="https://github.com/ijeomaemeruwa"  target="_blank" 
     rel="noopener noreferrer">
      GitHub
    </ContactLink>
    <ContactLink to="https://linkedin.com/in/ijeoma-emeruwa"  target="_blank" 
     rel="noopener noreferrer">
      LinkedIn
    </ContactLink>
    <ContactLink to="https://twitter.com/ijeomaemeruwa"  target="_blank" 
     rel="noopener noreferrer">
      Twitter
    </ContactLink>      
    </Contact>

    <CustomButton>
    <TopNavButton to="https://zety.com/mycv/ijeomaemeruwa" download="Ijeoma Emeruwa Resume">
        RESUME <BsChevronRight />
    </TopNavButton>
    </CustomButton>

    </TopBarMenu>
    </TopBarWrapper>
    </TopBarContainer>     
    </>
)
}

export default TopBar
