import React, {useContext, useState} from 'react';
import {Theme} from "./lib/components/ThemeWrapper";
import Text from "./lib/components/Text";
import Button from "./lib/components/Button";
import {PRIMARY, SECONDARY, WARNING, NEUTRAL, MOBILE} from "./lib/constants/ThemeWrapper";
import LoadingIndicator from "./lib/components/LoadingIndicator";
import styled from "styled-components";
import FormController from "./lib/components/FormController";
import {DataCell, FormInput} from "./lib/Models/FormInput";
import {
    ADDRESS_INPUT,
    BUTTON_SELECT,
    CHIP_SELECT,
    EMAIL_INPUT,
    NUMBER_FIELD, PASSWORD_INPUT,
    PHONE_INPUT,
    SELECT_FIELD,
    TEXT_AREA,
    TEXT_FIELD,
    TOGGLE
} from "./lib/constants/FormController";
import TextArea from "./lib/components/TextArea";
import LazyImage from "./lib/components/LazyImage";
import DescriptiveImage from "./lib/components/DescriptiveImage";
import Chip from "./lib/components/Chip";
import {Theme as ThemeModel} from './lib/Models/Theme';
import Container from "./lib/components/Container";
import Header from "./lib/components/Header";
import Footer from "./lib/components/Footer";
import Modal from "./lib/components/Modal";
import IconButton from "./lib/components/IconButton";

const StyledAppWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  & > div > div {
    margin-top: 128px;
    margin-bottom: 128px;
  }
  & > div > div > button {
    margin: 8px;
  }
`;

function App() {
    const theme = useContext(Theme);
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [data, setData] = useState<any>({
        text_field: '',
        phone_number: '',
        email: '',
        number_input: 0,
        text_area: '',
        toggle: false,
        select_field: 1,
        chip_select: [1]
    });

    const DATASET = [
        new DataCell('First', 1),
        new DataCell('Second', 2),
        new DataCell('Third', 3)
    ]

    const fields = [
        new FormInput('text_field', 'Text field', TEXT_FIELD, 'Text field'),
        new FormInput('phone_number','Phone number', PHONE_INPUT, 'Phone number'),
        new FormInput('email', 'Email', EMAIL_INPUT, 'Email'),
        new FormInput('password', 'Password', PASSWORD_INPUT, 'Password'),
        new FormInput('address_input', 'Address', ADDRESS_INPUT, 'Address'),
        new FormInput('number_input', 'Number input', NUMBER_FIELD, 'Number input'),
        new FormInput('select_field', 'Select field', SELECT_FIELD, 'Select field', DATASET),
        new FormInput('text_area','Text area', TEXT_AREA, 'Text area'),
        new FormInput('toggle','Toggle', TOGGLE),
        new FormInput('chip_select', 'Chip select', CHIP_SELECT, 'chip_select', DATASET),
        new FormInput('button_select', 'Button select', BUTTON_SELECT, 'button_select', DATASET)
    ];

    const handleChange = (value:string|number|boolean, key:string) => {
        let copyData = Object.assign({}, data);
        copyData[key] = value;
        setData(copyData)
    }

    const imageStyle = {
        width: 300,
        display: 'inline-block',
        verticalAlign: 'top',
        margin: 16
    }

    const DEFAULT_THEME = new ThemeModel(
        '#dcfd51',
        '#383838',
        '#b5c0f8',
        '#121212',
        '#f8b5b5',
        '#121212',
        '#e1ff93',
        '#12121212',
        '#FFFFFF',
        '#121212',
        '#000',
        '#FFF'
    )


    const DARK_THEME = new ThemeModel(
        '#585a4e',
        '#dcdcdc',
        '#8b8857',
        '#d0caca',
        '#861717',
        '#c2c0c0',
        '#e1ff93',
        '#1212121',
        '#CACACA',
        '#121212',
        '#000',
        '#FFF'
    )

    const handleThemeChange = (newTheme:any) => {
        if (newTheme && theme && theme.setTheme) {
            theme.setTheme(newTheme)
        }
    }

  // @ts-ignore
    return (
    <StyledAppWrapper>
        <div style={{width: theme.screenMode === MOBILE ? '' : 800}}>
            <div>
                <Text>
                    ThemeWrapper
                </Text>
                <Button variant={PRIMARY} onClick={() => handleThemeChange(DEFAULT_THEME)}>
                    Default
                </Button>
                <Button variant={SECONDARY} onClick={() => handleThemeChange(DARK_THEME)}>
                    Darker theme
                </Button>
            </div>
            <div>
                <Text>
                    Buttons
                </Text>
                <Button
                    variant={PRIMARY} onClick={() => {}}>
                    Primary button
                </Button>
                <Button variant={SECONDARY} onClick={() => {}}>
                    Secondary button
                </Button>
                <Button variant={WARNING} onClick={() => {}}>
                    Warning button
                </Button>
                <Button variant={NEUTRAL} onClick={() => {}}>
                    Neutral button
                </Button>
                <Button
                    icon={<li className={'gg-phone'}/>}
                    variant={PRIMARY} onClick={() => {}}>
                    Primary button with icon
                </Button>
                <Button
                    icon={<li className={'gg-phone'}/>}
                    variant={SECONDARY} onClick={() => {}}>
                    Secondary button with icon
                </Button>
                <Button
                    icon={<li className={'gg-phone'}/>}
                    variant={WARNING} onClick={() => {}}>
                    Warning button with icon
                </Button>
                <Button
                    icon={<li className={'gg-phone'}/>}
                    variant={NEUTRAL} onClick={() => {}}>
                    Neutral button with icon
                </Button>
                <Button
                    variant={PRIMARY} onClick={() => {}} disabled={true}>
                    Disabled Primary button
                </Button>
                <Button
                    variant={SECONDARY} onClick={() => {}} disabled={true}>
                    Disabled Secondary button
                </Button>
                <Button
                    disabled={true} variant={WARNING} onClick={() => {}}>
                    Disabled Warning button
                </Button>
                <Button
                    disabled={true} variant={NEUTRAL} onClick={() => {}}>
                    Disabled Neutral button
                </Button>
                <IconButton
                    onClick={() => console.log('klik')}
                    variant={PRIMARY}
                >
                    <i className={'gg-phone'}/>
                </IconButton>
                <IconButton
                    variant={SECONDARY}
                >
                    <i className={'gg-phone'}/>
                </IconButton>
                <IconButton
                    variant={WARNING}
                >
                    <i className={'gg-phone'}/>
                </IconButton>
                <IconButton
                    variant={NEUTRAL}
                >
                    <i className={'gg-phone'}/>
                </IconButton>
                <IconButton
                    label={'Primary'}
                    variant={PRIMARY}
                >
                    <i className={'gg-phone'}/>
                </IconButton>
                <IconButton
                    label={'Secondary'}
                    variant={SECONDARY}
                >
                    <i className={'gg-phone'}/>
                </IconButton>
                <IconButton
                    label={'Warning'}
                    variant={WARNING}
                >
                    <i className={'gg-phone'}/>
                </IconButton>
                <IconButton
                    label={'Neutral'}
                    variant={NEUTRAL}
                >
                    <i className={'gg-phone'}/>
                </IconButton>
                <IconButton
                    label={'Primary'}
                    disabled={true}
                    variant={PRIMARY}
                >
                    <i className={'gg-phone'}/>
                </IconButton>
                <IconButton
                    label={'Primary'}
                    disabled={true}
                    variant={SECONDARY}
                >
                    <i className={'gg-phone'}/>
                </IconButton>
                <IconButton
                    label={'Primary'}
                    disabled={true}
                    variant={WARNING}
                >
                    <i className={'gg-phone'}/>
                </IconButton>
                <IconButton
                    label={'Primary'}
                    disabled={true}
                    variant={NEUTRAL}
                >
                    <i className={'gg-phone'}/>
                </IconButton>
            </div>
            <div>
                <Text>
                    Loading indicator
                </Text>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <LoadingIndicator/>
                </div>
            </div>
            <div>
                <Text>
                    Form fields
                </Text>
                <div>
                    <FormController
                        value={data}
                        fields={fields}
                        onChange={(value:string|number|boolean, key:string) => handleChange(value, key)}/>
                </div>
                <div>
                    <Text>
                        Form controller data:
                    </Text>
                    <TextArea
                        disabled={true}
                        value={JSON.stringify(data)}
                        onChange={() => {}}
                    />
                </div>
            </div>
            <div>
                <Text>
                    Utils
                </Text>
                <div>
                    <Text>
                        {`Is PWA: ${theme.isPwa}`}
                    </Text>
                    <Text>
                        {`Is iOS ${theme.isIOS}`}
                    </Text>
                    <Text>
                        {`Screenmode is ${theme.screenMode}`}
                    </Text>
                </div>
            </div>
            <div>
                <Text>
                    Lazy image
                </Text>
                <div>
                    <LazyImage
                        style={imageStyle}
                        src={'https://images.pexels.com/photos/6392896/pexels-photo-6392896.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}
                        alt={'Image 1'}/>
                    <LazyImage
                        style={imageStyle}
                        src={'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}
                        alt={'Image 2'}/>
                    <LazyImage
                        style={imageStyle}
                        src={'https://images.pexels.com/photos/6001800/pexels-photo-6001800.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}
                        alt={'Image 3'}/>
                </div>
            </div>
            <div>
                <Text>
                    Descriptive image
                </Text>
                <div>
                    <DescriptiveImage
                        wrapperStyle={{margin: 16}}
                        label={'Label for image 1'}
                        style={{width: 300}}
                        src={'https://images.pexels.com/photos/6392896/pexels-photo-6392896.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}
                        alt={'Image 1'}>
                            <div>
                                You can embed child nodes in here. You can add your own styles and classes for images.
                            </div>
                    </DescriptiveImage>
                    <DescriptiveImage
                        descriptionStyle={{color: 'white'}}
                        wrapperStyle={{margin: 16, verticalAlign: 'top'}}
                        label={'Label for image 2'}
                        style={{width: 300}}
                        src={'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}
                        alt={'Image 2'}>
                        <div>
                            You can modify wrapper style also as you like with styles or classes.
                        </div>
                    </DescriptiveImage>
                    <DescriptiveImage
                        disabled={true}
                        wrapperStyle={{margin: 16, verticalAlign: 'top'}}
                        label={'Label for image 3'}
                        style={{width: 300}}
                        disabledElement={<h1 style={{color: 'white'}}>DISABLED</h1>}
                        src={'https://images.pexels.com/photos/6001800/pexels-photo-6001800.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}
                        alt={'Image 3'}>
                        <div>
                            This image Descriptive image is disabled
                        </div>
                    </DescriptiveImage>
                </div>
            </div>
            <div>
                <div>
                    <Text>
                        Chip
                    </Text>
                </div>
                <div>
                    <Chip variant={PRIMARY} onClick={() => {}}>
                        Primary chip
                    </Chip>
                    <Chip variant={SECONDARY} onClick={() => {}}>
                        Secondary chip
                    </Chip>
                    <Chip variant={WARNING}>
                        Warning chip
                    </Chip>
                    <Chip variant={NEUTRAL}>
                        Neutral chip
                    </Chip>
                </div>
            </div>
            <div>
                <div>
                    <Text>
                        Container
                    </Text>
                </div>
                <div>
                    <Container>
                        Foo bar
                    </Container>
                </div>
            </div>
            <div>
                <div>
                    <Text>
                        Header
                    </Text>
                    <div>
                        <Header position={'sticky'}>
                            <Text>
                                Children for header
                            </Text>
                        </Header>
                        <div style={{display: 'flex', justifyContent: 'center', width: '100%', height: 128, overflowY: 'scroll'}}>
                            <Container>
                                <Text>
                                    Lorem ipsum dolor sit ames
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit ames
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit ames
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit ames
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit ames
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit ames
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit ames
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit ames
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit ames
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit ames
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit ames
                                </Text>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Text>
                                Footer
                            </Text>
                        </div>
                        <div>
                            <div style={{
                                position: 'relative',
                                height: 256
                            }}>
                                <div>
                                    <Container>
                                        <Text>
                                            Foo bar
                                        </Text>
                                    </Container>
                                    <Footer>
                                        Footer children
                                    </Footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <Text>
                        Modal
                    </Text>
                </div>
                <div>
                    <Button variant={PRIMARY} onClick={() => setDialogOpen(true)}>
                        Open the modal
                    </Button>
                    <Modal
                        headerChildren={<div>You can add Header children here.</div>}
                        onClose={() => setDialogOpen(false)}
                        open={dialogOpen}>
                        foo
                    </Modal>
                </div>
            </div>
        </div>
    </StyledAppWrapper>
  );
}

export default App;
