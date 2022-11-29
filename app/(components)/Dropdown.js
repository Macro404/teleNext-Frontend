"use client"
import { Menu } from '@headlessui/react'
import Link from "next/link";
import '../../styles/dropdown.css'

export default function Dropdown() {
  return (
    <div className="dropdown-menu">
    <Menu>
      <Menu.Button>Menu</Menu.Button>
      <Menu.Items>
      <Menu.Item>
          {({ active }) => (
            <Link href='/account' className="account-link dropdown-link">
            <h1>My page</h1>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link href='/phones' className="phones-link dropdown-link">
            <h1>Phones</h1>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link href='/about_us' className="about-us-link dropdown-link">
            <h1>About us</h1>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link href='/faq' className="faq-link dropdown-link">
            <h1>FAQ</h1>
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
    </div>
  )
}