import React from 'react'
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import FilterForm from './FilterForm';

const CreateForm = () => {
    return (
        <div>
            <FilterForm/>
            <Form>
                <label className='m-1 ' htmlFor="">Pasirinkte datą:</label>
                <FormControl className='my-2'
                    type="date"
                />
                <FloatingLabel className='my-2' label="Pasirinkite įmone">
                    <Form.Select aria-label="Floating label select example">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel className='my-2' label="Pasirinkite suteiktą paslaugą">
                    <Form.Select aria-label="Floating label select example">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel className='my-2' controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <label className='m-1' htmlFor="">Nuo:</label>
                <FormControl className='my-2'
                    type="time"
                />
                <label className='my-1' htmlFor="">Iki:</label>
                <FormControl className='my-2'
                    type="time"
                />
                <button type="button" class="btn btn-primary">Saugoti</button>
            </Form>
        </div>
    )
}

export default CreateForm
