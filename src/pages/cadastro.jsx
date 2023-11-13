import React, { useState } from 'react';
import { Badge, Button, Col, Container, FormControl, InputGroup, ListGroup, Pagination, Row, Modal, Form, FormLabel } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import { BsFilePlus, BsPen, BsPeopleFill, BsPlusCircleFill, BsSearch, BsTrash } from 'react-icons/bs';
import '../style/css.css';


import 'bootstrap/dist/css/bootstrap.min.css';

function AdicionarCatador(props) {
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title style={{ color: '#EF7A2A' }}>
                    Criar Cadastro
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <FormLabel className='text-orange'>
                            Nome Completo
                        </FormLabel>
                        <FormControl type='text' />
                        


                        <FormLabel className='text-orange'>
                            CPF
                        </FormLabel>
                        <InputMask  className='form-control' mask="999.999.999-99" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                        {(inputProps) => <Form.Control {...inputProps} />}
        


                        <FormLabel className='text-orange'>
                            E-mail
                        </FormLabel>
                        <FormControl type='email'  />


                        <FormLabel className='text-orange'>
                            Telefone
                        </FormLabel>
                        <InputMask className='form-control' mask="99 99999-9999" value={telefone} onChange={(e) =>setTelefone(e.target.value)} />
                        {(inputProps) => <FormControl {...inputProps} />}



                        <FormLabel className='text-orange'>
                            Cargo
                        </FormLabel>
                        <FormControl type='text'  />



                        <FormLabel className='text-orange'>
                            Ecoponto
                        </FormLabel>
                        <FormControl type='text' />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                
                <Button type="submit" className='rounded btn-orange w-100' onClick={props.onHide}> Enviar </Button>
            </Modal.Footer>
        </Modal>
    );
}




function Cadastro() {
    const [modalShow, setModalShow] = React.useState(false);


    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '90vh' }}>
            <Row className='border bg-white rounded-5 shadow mt-5 w-100 justify-content-center p-5'>
                <Col md={12} className="d-flex align-items-center justify-content-center">
                    <Button type='submit' className='rounded-5 btn-orange p-3 mb-2 mx-2'><BsPeopleFill size={20} className='m-2' />ADMINISTRADOR</Button>
                    <Button type='submit' className='rounded-5 btn-orange p-3 mb-2 mx-2'><BsPeopleFill size={20} className='m-2' />CATADOR</Button>
                    <Button type='submit' className='rounded-5 btn-orange p-3 mb-2 mx-2'><BsPeopleFill size={20} className='m-2' />ASSOCIAÇÃO</Button>
                    <Button type='submit' className='rounded-5 btn-orange p-3 mb-2 mx-2'><BsPeopleFill size={20} className='m-2' />OP. LOGÍSTICO</Button>
                </Col>
                <hr className='m-4' />
                <Col md={12} className="d-flex align-items-center justify-content-between">
                    <InputGroup className="w-75">
                        <FormControl className='custom-focus'
                            placeholder="Pesquisar"
                            aria-label="Pesquisar"
                            aria-describedby="basic-addon2"
                        />
                        <Button type='submit' className='btn-orange' id="button-addon2">
                            <BsSearch className='' /> Buscar
                        </Button>
                    </InputGroup>
                    <Button type='submit' className='btn-orange' onClick={() => setModalShow(true)}>
                        <BsPlusCircleFill /> Adicionar
                    </Button>
                    <AdicionarCatador show={modalShow} onHide={() => setModalShow(false)} />
                </Col>
                <Col>
                    <h3 className='m-3' style={{ color: '#EF7A2A' }}>Lista de Catadores</h3>
                    <ListGroup as='ol' numbered>
                        <ListGroup.Item action
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Nome do Catador</div>
                                CPF: 000.000.000-00 <br />
                                Email: emaildocatador@gmail.com
                            </div>
                            <div>
                                <Button type='submit' className="mx-2 btn-orange" >
                                    <BsPen /> Editar
                                </Button>
                                <Button type='submit' className="btn-orange" >
                                    <BsTrash /> Excluir
                                </Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item action
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Nome do Catador</div>
                                CPF: 000.000.000-00 <br />
                                Email: emaildocatador@gmail.com
                            </div>
                            <div>
                                <Button type='submit' className="mx-2 btn-orange" >
                                    <BsPen /> Editar
                                </Button>
                                <Button type='submit' className="btn-orange" >
                                    <BsTrash /> Excluir
                                </Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item action
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Nome do Catador</div>
                                CPF: 000.000.000-00 <br />
                                Email: emaildocatador@gmail.com
                            </div>
                            <div>
                                <Button type='submit' className="mx-2 btn-orange" >
                                    <BsPen /> Editar
                                </Button>
                                <Button type='submit' className="btn-orange" >
                                    <BsTrash /> Excluir
                                </Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item action
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Nome do Catador</div>
                                CPF: 000.000.000-00 <br />
                                Email: emaildocatador@gmail.com
                            </div>
                            <div>
                                <Button type='submit' className="mx-2 btn-orange" >
                                    <BsPen /> Editar
                                </Button>
                                <Button type='submit' className="btn-orange" >
                                    <BsTrash /> Excluir
                                </Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item action
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Nome do Catador</div>
                                CPF: 000.000.000-00 <br />
                                Email: emaildocatador@gmail.com
                            </div>
                            <div>
                                <Button type='submit' className="mx-2 btn-orange" >
                                    <BsPen /> Editar
                                </Button>
                                <Button type='submit' className="btn-orange" >
                                    <BsTrash /> Excluir
                                </Button>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>

                    <Pagination className='pagination-orange mt-3 justify-content-center' >
                        <Pagination.Prev>Anterior</Pagination.Prev>
                        <Pagination.Item >{1}</Pagination.Item>
                        <Pagination.Item active>{2}</Pagination.Item>
                        <Pagination.Item >{3}</Pagination.Item>
                        <Pagination.Next>Próxima</Pagination.Next>
                    </Pagination>

                </Col>
            </Row>
        </Container>

    );
}

export default Cadastro;