import React, { useState } from 'react'

function Form() {

    // State for controlling the modal visibility
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h3 className="text-2xl font-bold mb-4">Beautiful Pop-Up Modal</h3>
        <p className="text-gray-600">
          This is a beautifully styled modal that appears on a button click.
          You can place any content you like here.
        </p>
      </Modal>
    </div>
  )
}

export default Form