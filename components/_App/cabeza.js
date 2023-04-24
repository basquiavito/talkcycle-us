import { Navbar, Link, Text, } from "@nextui-org/react";
 import Image from 'next/image'


export default function App() {
  const collapseItems = [
    "news",
    "latest",
    "charts",
"signature ",
 
  
  ];

  return <>
     
      <Navbar aria-label="Main" inputMode="button" isCompact  isBordered variant="static">
    
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
       
        >
         <div id="headerLogo"><Link href="/"><Image src="logo.svg" width="120" height="150" alt="logo"/></Link></div>
       
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link  href="/#news" rel="noopener"   ><span className="navLink">news</span> </Navbar.Link>

          <Navbar.Link  href="/#latest" rel="noopener"   ><span className="navLink">latest</span> </Navbar.Link>

          <Navbar.Link  href="/#chart"><span className="navLink">charts</span> </Navbar.Link>

 
          <Navbar.Link href="/#signature"><span className="navLink">Signature</span></Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        > 
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 6}
            >
              <Link
                color="black"
                css={{
                  minWidth: "100%",
                  linBreak: "auto",
                  lineHeight: "1em",
                  fontSize: "24px",
                  fontWeight: "700",
                  fontFamily: "Walfork",
                  textTransform:"Capitalize",
                  overflowWrap:"normal",
                  color:"rgb(26, 26, 26)",
                  cursor: "pointer",
                  padding: "8px",
                  paddingLeft: 0,
                  fontWeight: "bold",
                  fontSize: "2rem"
                }}
                href={`/${item}`}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
   <style jsx>
    {`
    .navbar {
      background-color: black;
    }
    
    #headerLogo {
      text-align: center;
      margin-left: 7px;
      margin-right: 7px;
      font-size:17px;
      letter-spacing: -3px;
      display: flex;
      justify-content: center;
      
      color: #000;
  }
  #headerLogo h1 {
      position: relative !important;
      letter-spacing: -2px;
      display: flex;
      justify-content: center;
      font-family: Walfork;
      font-weight: 600;
      text-transform: uppercase;
      color: #000;
    
  }
   
              @media only screen and (min-width: 1025px){
                  .header {
               display: none;
                    }}
              .menu-item {
                display: block;
                padding: 0.75rem 2.25rem;
                line-height: 1;
                color: rgb(255, 255, 255);
                border-bottom: 1px solid rgb(255, 255, 255);;
              }

              
    .navLink {
      color: #000;
      cursor: pointer;
      transition-property: color, background, text-shadow;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      line-break: auto;
    line-height: 1.5em;
    font-size: 12px;
    font-weight: 600;
    overflow-wrap: normal;
    font-style: normal;
    letter-spacing: 0.083em;
    text-transform: uppercase;
    font-family: Walfork, helvetica, sans-serif;
    margin-top: 1.5rem;
 
      
    }

    .head {
color: rgb(228, 18, 36);
transition: color 200ms ease 0s;

    }
    `}
   </style>
  </>;
}
