import { Button, Image, Input, Textarea } from '@nextui-org/react';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { productsActions, useProductMutation } from '..';

interface FormInput {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const NewProduct = () => {
  const productMutation = useProductMutation();

  const { register, handleSubmit, watch } = useForm<FormInput>({
    defaultValues: {
      title: 'Teclado',
      price: 150.2,
      description: 'Teclado mecanico',
      category: 'electronics',
      image:
        'https://th.bing.com/th/id/OIP.cNfT_MwR3tL9TEPGICemDQHaFI?w=236&h=180&c=7&r=0&o=5&pid=1.7',
    },
  });
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    productMutation.mutate(data);
  };

  const newImage = watch('image');

  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-around items-center">
          <div className="flex-col w-[500px]">
            <Input
              {...register('title')}
              className="mt-2"
              type="text"
              label="Titulo del producto"
            />
            <Input
              {...register('price', { valueAsNumber: true })}
              className="mt-2"
              type="number"
              label="Precio del producto"
            />
            <Input
              {...register('image')}
              className="mt-2"
              type="url"
              label="Url del producto"
            />
            <Textarea
              {...register('description')}
              className="mt-2"
              label="Descripcion del producto"
            />
            <select
              {...register('category')}
              className="rounded-md p-3 mt-2 bg-gray-800 w-full"
            >
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>

            <br />
            <Button
              disabled={productMutation.isPending}
              isDisabled={productMutation.isPending}
              isLoading={productMutation.isPending}
              type="submit"
              className="mt-2"
              color="primary"
            >
              {productMutation.isPending ? 'Guardando...' : 'Guardar'}
            </Button>
          </div>

          <div
            className="bg-white rounded-2xl p-10 flex items-center"
            style={{
              width: '500px',
              height: '600px',
            }}
          >
            <Image src={newImage} />
          </div>
        </div>
      </form>
    </div>
  );
};
