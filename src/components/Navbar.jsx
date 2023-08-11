import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Box, IconButton } from "@mui/material";
import { useState } from "react";
import { Link as Mlink } from "@mui/material";
import navImage from "../assets/12th Project/Logo Files/PNGs & SVGs/1x/Asset 3.png";
const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <AppBar position='sticky'>
      <Box
        bgcolor='white'
        display='flex'
        justifyContent={"space-between"}
        paddingX={{ xs: "1.25rem", md: "10rem" }}
        paddingY={"1.25rem"}
        alignItems={"center"}
      >
        <Box>
          <Mlink
            target='_blank'
            rel='noopener'
            href='https://for-zero-web.vercel.app/'
          >
            <Box width={{ xs: "4.9rem" }} className='logoimg'>
              {/* 4.9rem */}
              <img
                style={{ width: "100%" }}
                src={navImage}
                alt='lowsootoisdfj'
              />
            </Box>
          </Mlink>
        </Box>
        <div className='c_links'>
          <Box display='flex' gap={"0.5rem"}>
            <Mlink
              underline='none'
              fontSize='1.125rem'
              target='_blank'
              rel='noopener'
              sx={{ color: "black" }}
              href='https://for-zero-web.vercel.app/our-projetcs'
            >
              Our Projects
            </Mlink>
            <Mlink
              underline='none'
              fontSize='1.125rem'
              target='_blank'
              rel='noopener'
              sx={{ color: "black" }}
              href='https://for-zero-web.vercel.app/our-approach'
            >
              Our Approach
            </Mlink>
          </Box>
        </div>
        <div className='c_navtoggle'>
          <Box
            onClick={() => setState((curr) => !curr)}
            display='flex'
            gap={"0.5rem"}
          >
            {/* sx={{ color: "primary" }} */}A
            <IconButton color='primary'>
              {state ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </div>
      </Box>
      {state && (
        <Box
          display={"flex"}
          flexDirection={"column"}
          paddingX={"2rem"}
          width={"100%"}
          gap={"0.5rem"}
          paddingBottom={"1rem"}
          justifyContent={"center"}
          bgcolor='white'
        >
          <Mlink
            underline='none'
            fontSize='1.125rem'
            target='_blank'
            rel='noopener'
            sx={{ color: "black" }}
            href='https://for-zero-web.vercel.app/our-projects'
          >
            Our Projects
          </Mlink>
          <Mlink
            underline='none'
            fontSize='1.125rem'
            target='_blank'
            rel='noopener'
            sx={{ color: "black" }}
            href='https://for-zero-web.vercel.app/our-approach'
          >
            Our Approach
          </Mlink>
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;
