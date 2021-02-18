import React, { useState } from 'react';
//import "@leoncvlt/ar-button";
//import "@leoncvlt/ar-button/styles.css";
import { Tabs, Tab, Typography, Box, AppBar } from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import KingBedRoundedIcon from '@material-ui/icons/KingBedRounded';
import imgLogo from '../src/assets/logo-dilis.jpg';
import Modal from '@material-ui/core/Modal';

import Home from './pages/Home';
import Interior from './pages/Interior';
import Maps from './pages/Maps';


const useStyles = makeStyles({
  root: {
      flexGrow: 1,
      maxWidth: 500,
  },
  appBar: {
      top: 'auto',
      bottom: 0,
    },
});

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#6e48aa',
    },
    secondary:{
      main: '#fff',
    },
  },
  
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
      >
          {value === index && (
              <Box p={3} style={{padding:0}}>
                  <Typography>{children}</Typography>
              </Box>
          )}
      </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function App() {
  const classes = useStyles();
    const [value, setValue] = React.useState(1);
    const [open, setOpen] = useState(false);
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const handleClose = () => {
        setOpen(false);
    };



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const body = (
        <ChatBot
        headerTitle="Atendimento"
        botAvatar={imgLogo}
        placeholder="Digite sua mensagem"
        enableMobileAutoFocus={true}
        hideUserAvatar={true}
        floating={false}
        enableSmoothScroll={true}
        userDelay={0}
        handleEnd={handleClose}
        steps={[
          {
            id: '1',
            message: 'Olá, seja bem-vindo ao sistema Vivenda.',
            trigger: '2',
          },
          {
            id: '2',
            message: 'Como posso te chamar?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            placeholder: 'Digite seu nome',
            trigger: '4',
          },
          {
            id: '4',
            message: 'Prazer, {previousValue}. Qual seu email?',
            trigger: 'email',
          },
          {
            id: 'email',
            user: true,
            placeholder: 'Digite seu e-mail',
            trigger: '5',
            validator: (value) => {
              if (pattern.test(value)) {
                return true;
              }
              else {
                return 'E-mail inválido!'
              }
            }
          },
          {
            id: '5',
            message: 'E quantos anos você tem?',
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            placeholder: 'Digite sua idade',
            trigger: '7',
            validator: (value) => {
              if (isNaN(value)) {
                return 'O valor deve ser um número';
              } else if (value < 0) {
                return 'Valor deve ser positivo';
              } else if (value > 120) {
                return `${value}? Sério?!`;
              }
              return true;
            },
          },
          {
            id: '7',
            message: 'Entendi, que bacana. E qual seu genêro?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'Homem', label: 'Homem', trigger: '18' },
              { value: 'Mulher', label: 'Mulher', trigger: '8' },
            ],
          },
          {
            id: '8',
            message: 'Você é casada ou solteira?',
            trigger: 'civil',
          },
          {
            id: '18',
            message: 'Você é casado ou solteiro?',
            trigger: 'civil',
          },
          {
            id: 'civil',
            options: [
              { value: 'Casado(a)', label: 'Casado(a)', trigger: '9' },
              { value: 'Solteiro(a)', label: 'Solteiro(a)', trigger: '9' },
            ],
          },
          {
            id: '9',
            message: 'Para proporcionar a melhor experiência possível, qual sua faixa salarial?',
            trigger: 'salary',
          },
          {
            id: 'salary',
            options: [
              { value: '2mil', label: 'Ate 2mil', trigger: '10' },
              { value: '2mil-4mil', label: '2mil e 4mil', trigger: '10' },
              { value: '4mil-8mil', label: '4mil e 8mil', trigger: '10' },
              { value: 'Acima-8mil', label: 'Acima de 8mil', trigger: '10' },
            ],
          },
          {
            id: '10',
            message: 'Show!! E sobre o condomínio, o que é mais importante para você?',
            trigger: 'PCond',
          },
          {
            id: 'PCond',
            options: [
              { value: 'churrasqueira', label: 'Churrasqueira', trigger: 'SelectChurras' },
              { value: 'piscina', label: 'Piscina', trigger: 'SelectPisc' },
              { value: 'salaofesta', label: 'Salao de Festa', trigger: 'SelectFest' },
              { value: 'escationamento', label: 'Escationamento', trigger: 'SelectEsta' },
              { value: 'kids', label: 'Area kids', trigger: 'SelectKids' },
            ],
          },
          {
            id: 'SelectChurras',
            message: 'Churrasqueira? Eu também acho super importante! E do apartamento?',
            trigger: 'PApto',
          },
          
          {
            id: 'SelectPisc',
            message: 'Piscina? Eu também acho bom! E do apartamento?',
            trigger: 'PApto',
          },
          {
            id: 'SelectFest',
            message: 'Salão de Festa? Eu também acho bom! E do apartamento?',
            trigger: 'PApto',
          },
          {
            id: 'SelectEsta',
            message: 'Estacionamento? Eu também acho bom! E do apartamento?',
            trigger: 'PApto',
          },
          {
            id: 'SelectKids',
            message: 'Espaço Kids? Eu também acho bom! E do apartamento?',
            trigger: 'PApto',
          },

          {
            id: 'PApto',
            options: [
              { value: 'NumeroQuartos', label: 'Número de Quartos', trigger: 'SelectQuarto' },
              { value: 'Sala', label: 'Sala', trigger: 'SelectSala' },
              { value: 'Varanda', label: 'Varanda', trigger: 'SelectVaranda' },
              { value: 'CozinhaGrande', label: 'Cozinha Grande', trigger: 'SelectCozinha' },
            ],
          },
          {
            id: 'SelectQuarto',
            message: 'A quantidade de quarto é algo muito importante mesmo!',
            trigger: '12'
          },
          {
            id: 'SelectSala',
            message: 'Uma sala bem estruturada faz a diferença',
            trigger: '12'
          },
          {
            id: 'SelectVaranda',
            message: 'Eita uma varanda...',
            trigger: '12'
          },
          {
            id: 'SelectCozinha',
            message: 'A cozinha é o coração da casa, então tem que ser grande.',
            trigger: '12'
          },
          {
            id: '12',
            message: 'É isso! Muito obrigado, esperamos que você aproveite toda interação e conheça o prédio. Abraço e até mais!',
            trigger: '13'
          },
          {
            id: '13',
            options: [
              { value: 'Fechar Conversa', label: 'Fechar Conversa', end: true },]
          }
        ]}
      />
    );

  return (
    <div className="App">
      <ThemeProvider theme={theme}  >
                <div className="TituloLocal" >
                    <h1 >RESIDENCIAL DILIS</h1>
                    <h3>RUA PEDRO I, 81 - CENTRO</h3>
                </div>
                
                <TabPanel value={value} index={0}>
                    <Maps />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Home />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Interior />
                </TabPanel>

                <AppBar position="fixed" className={classes.appBar}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
                        <Tab label="Maps" icon={<MapRoundedIcon />} {...a11yProps(0)} />
                        <Tab label="Home" icon={<HomeRoundedIcon />} {...a11yProps(1)} />
                        <Tab label="Interior" icon={<KingBedRoundedIcon />} {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                
                <div>
                    {/*Estrutura do chat */}
                    <Modal
                        open={open}
                    >
                        {body}
                    </Modal>
                </div>
            </ThemeProvider >

      
    </div>
  );
}
