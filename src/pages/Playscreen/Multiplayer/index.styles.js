const inGameContainer = () => ({
  width: '100vw',
  height: '100vh',
  backgroundolor: 'purple',
  textAlign: 'center',
  zIndex: 1,
})

const playerOne = ({theme}) => ({
  left: '15%',
  [theme.breakpoints.down('sm')] : {
    top: '24%',
    left: '37%',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    alignItems: 'center',
    width: '10rem',
    border: '2px solid red',

  }
})

const inGameNav = ({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '45%',
  margin: 'auto',
  justifyContent: 'space-between',
  transform: 'translateY(75%)',
  [theme.breakpoints.down('sm')]:{
    gap: '2rem',
    justifyContent: 'center',
    transform: 'translateY(10px)',
    '& img': {
      width: '50px',
      height: '50px',
    }
  }
})

const link =({theme}) => ({
  color: 'white',
  textDecoration: 'none',
  backgroundColor: 'darkPurple',
  padding: '8px 16px',
  borderRadius: '5rem',
  '& :hover': {
    color: 'rgb(218, 216, 216)',
  }
})

const BlackBoard = ({theme}) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '632px',
  height: '584px',
  zIndex:3,
  [theme.breakpoints.down('sm')] : {
    width: '335px',
    height: '310px',
  }
})

const WhiteBoard = ({theme}) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '632px',
  height: '584px',
  zIndex:5,
  [theme.breakpoints.down('sm')] : {
    width: '335px',
    height: '310px',
  }
})

const board = ({theme}) => ({
  cursor: 'pointer',
  height: '37.5rem',
  width:'40rem',
  zIndex: '2',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  gap: '21px',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]:{
    gap: '10px',
  }
})

const mobileButton = ({theme}) => ({
  zIndex: '9',
  width: '67px',
  fontSize: '1px',
  backgroundColor: 'rgba(255, 255, 255, 0)',
  border: 'none',
  '& :hover': {
    backgroundColor: 'black',
    opacity: '0.15',
  },
  [theme.breakpoints.down('sm')]:{
    zIndex: '9',
    width: '37px',
    height: '300px',
    marginTop:' 25px',
  }
})

export default {
  inGameContainer,
  playerOne,
  board,
  mobileButton,
  BlackBoard,
  WhiteBoard
}