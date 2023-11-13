import React from 'react';
import { Modal, Button, Form, FormControl } from 'react-bootstrap';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const EsqueceuSenha = ({ show, onHide }) => {
  const modalEsqueciSenhaFechar = () => {
    // Lógica para fechar o modal
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: '#EF7A2A' }} className='text-orange'>
          Esqueci a Senha
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <h6 className='text-orange text-center'>
            Você receberá as instruções para alterar a senha no e-mail informado
          </h6>

          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <div className='input-group mb-3'>
              <div className='input-group-text btn-orange'>
                <BsFillEnvelopeFill />
              </div>

              <FormControl
                className='form-control custom-focus'
                type='email'
                placeholder='Digite seu email'
              />
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer className='w-100'>
        <div className='d-grid gap-2 w-100'>
          <Button type='submit' className='rounded btn-orange w-100' onClick={modalEsqueciSenhaFechar}>
            Fechar
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default EsqueceuSenha;