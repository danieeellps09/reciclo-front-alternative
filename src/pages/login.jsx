import React, { useState } from 'react';
import { BsFillEnvelopeFill, BsEyeFill, BsEyeSlashFill, BsKeyFill } from "react-icons/bs";
import { Col, Container, Form, FormControl, FormLabel, Row, Image, Button } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import telaLogin from '../images/telalogin.svg'
import '../style/css.css'

function Login() {
    const [show, setShow] = useState(false);

    const modalEsqueciSenhaFechar = () => setShow(false);
    const modalEsqueciSenha = () => setShow(true);
 

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avisoSenha, setAvisoSenha] = useState('');
    const [avisoEmail, setAvisoEmail] = useState('');

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const isEmailValid = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }



    return (
        <>
            <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '90vh' }}>
                <Row className='border bg-white rounded-5 shadow mt-5 w-100'>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Form className="w-75 p-3">
                            <Form.Group>
                                <FormLabel>Email</FormLabel>
                                <div className="input-group mb-3">  
                                    <div className='input-group-text btn-orange'>
                                        <BsFillEnvelopeFill />
                                    </div>

                                    <FormControl
                                        className="form-control custom-focus"
                                        type='email'
                                        placeholder='Digite seu email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <br />
                                    <small className="text-muted aviso">
                                        {avisoEmail}
                                    </small>
                                </div>

                                <FormLabel>Senha</FormLabel>
                                <div className="input-group mb-3">
                                    <div className='input-group-text btn-orange'>
                                        <BsKeyFill />
                                    </div>
                                    <FormControl
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control custom-focus"
                                        placeholder="Digite sua senha"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />


                                    <div className='input-group-text' onClick={handlePasswordVisibility}>
                                        {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                                    </div>
                                </div>

                                <small className="text-muted aviso">
                                    {avisoSenha}
                                </small>
                            </Form.Group>

                            <Row className="d-flex justify-content-between">
                                <Col className='d-flex'>

                                    <input type="checkbox" class="form-check-input custom-focus" id="save-login" />
                                    <label class="form-check-label ml-1" for="save-login">Salvar login</label>

                                </Col>
                                <Col className="d-flex justify-content-end">

                                    <a className='text-orange' href="#" onClick={modalEsqueciSenha}>Esqueceu a senha?</a>

                                    <Modal show={show} onHide={modalEsqueciSenhaFechar}>
                                        <Modal.Header closeButton>
                                            <Modal.Title style={{ color: '#EF7A2A' }} className='text-orange'>Esqueci a Senha</Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>
                                            <Form>
                                                <h6 className='text-orange text-center'>Você receberá as instruções para alterar a senha no e-mail informado</h6>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                                    <div className="input-group mb-3">
                                                        <div className='input-group-text btn-orange'>
                                                            <BsFillEnvelopeFill />
                                                        </div>

                                                        <FormControl
                                                            className="form-control custom-focus"
                                                            type='email'
                                                            placeholder='Digite seu email'
                                                        />
                                                    </div>

                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>

                                        <Modal.Footer className='w-100'>
                                            <div className="d-grid gap-2 w-100">
                                                <Button type="submit" className='rounded btn-orange w-100' onClick={modalEsqueciSenhaFechar}>
                                                    Enviar
                                                </Button>
                                            </div>
                                        </Modal.Footer>
                                    </Modal>

                                </Col>
                            </Row>
                            <Button type="submit" className="rounded-5 btn-orange w-100 mt-4">
                                Entrar
                            </Button>
                        </Form>
                    </Col>
                    <Col >
                        <Image className='p-4' src={telaLogin} alt="Tela de Login" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;
