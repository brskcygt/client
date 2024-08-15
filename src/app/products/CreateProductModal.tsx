import React, { useState } from 'react'
import { v4 } from 'uuid';

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
}

type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
}

const CreateProductModal = ({ isOpen, onClose, onCreate }: CreateProductModalProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0
  })

  if (!isOpen) return null;

  return (
    <div className='flex inset-0 bg-gray-600 bg-opacity-59'>CreateProductModal</div>
  )
}

export default CreateProductModal