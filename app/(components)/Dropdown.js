"use client"
import { Menu } from '@headlessui/react'
import Link from "next/link";
import '../../styles/dropdown.css'

export default function Dropdown() {
  return (
    <div className="dropdown-menu">
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
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
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
    </div>
  )
}