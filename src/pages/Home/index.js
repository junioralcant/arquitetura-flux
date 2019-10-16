import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_detalhe2.jpg?ims=326x"
          all="Tênis"
        />
        <strong>Um belo tênis</strong>
        <span>R$129,90</span>

        <button>
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_detalhe2.jpg?ims=326x"
          all="Tênis"
        />
        <strong>Um belo tênis</strong>
        <span>R$129,90</span>

        <button>
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_detalhe2.jpg?ims=326x"
          all="Tênis"
        />
        <strong>Um belo tênis</strong>
        <span>R$129,90</span>

        <button>
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_detalhe2.jpg?ims=326x"
          all="Tênis"
        />
        <strong>Um belo tênis</strong>
        <span>R$129,90</span>

        <button>
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_detalhe2.jpg?ims=326x"
          all="Tênis"
        />
        <strong>Um belo tênis</strong>
        <span>R$129,90</span>

        <button>
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_detalhe2.jpg?ims=326x"
          all="Tênis"
        />
        <strong>Um belo tênis</strong>
        <span>R$129,90</span>

        <button>
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
