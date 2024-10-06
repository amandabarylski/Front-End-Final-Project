import { useState } from "react"
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

type DeleteModalProps = {
    id: string | number
}

const DeleteModal = ({ id }: DeleteModalProps) => {

//I didn't need useParams here since a modal isn't a separate page.
//However, I imported useNavigate in order to send the user back to the recipe book page after a successful delete.
    const navigate = useNavigate()

    // const baseURL = "http://localhost:3000/recipes"
    const baseURL = "https://6701c8feb52042b542d88e77.mockapi.io/api/project/recipes"

    const [show, setShow] = useState(false)

    const handleCLose = () => setShow(false)
    const handleShow = () => setShow(true)

    const deleteRecipe = async (id: string | number) => {
        try {
          const response = await fetch(`${baseURL}/${id}`, {
            method: 'DELETE',
          });
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          toast.success("Recipe deleted successfully!")
          handleCLose()
          navigate("/recipe-book")
        } catch (error) {
          console.error('Error:', error)
          toast.error("Failed to delete recipe.")
        }
      }

//To make it easier to refer to, I moved the button into this component as well.
//The styling still worked, and the modal itself also looked good.
    return (
        <>
        <Button variant="danger" className="mx-auto" onClick={handleShow}>Delete</Button>

        <Modal show={show} centered>
            <Modal.Header closeButton></Modal.Header>
            <ModalBody>Are you sure you want to delete this recipe?</ModalBody>
            <ModalFooter>
                <Button variant="secondary" onClick={handleCLose}>Cancel</Button>
                <Button variant="danger" onClick={() => deleteRecipe(id)}>Delete</Button>
            </ModalFooter>
        </Modal>
        </>
    )
}

export default DeleteModal