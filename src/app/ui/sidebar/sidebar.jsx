import React from 'react'
import Image from 'next/image'
import styles from './sidebar.module.css'
import { MdDashboard } from 'react-icons/md'
import { FaUserSecret, FaProductHunt } from 'react-icons/fa'
import { AiOutlineTransaction } from 'react-icons/ai'
import Menulink from './menuLink/menulink'

const menuItems = [
  {
    title: 'User',
    list: [
      { title: 'Dashboard',     path: '/dashboard',       icon: <MdDashboard /> },
      { title: 'Users',         path: '/dashboard/users', icon: <FaUserSecret /> },
      { title: 'Products',      path: '/dashboard/products', icon: <FaProductHunt /> },
      { title: 'Transactions',  path: '/dashboard/transaction', icon: <AiOutlineTransaction /> },
    ],
  },
]

export default function Sidebar() {
  return (
    <nav className={styles.container}>
      <div className={styles.userPanel}>
        <Image
          src="/vercel.svg"
          alt="User Avatar"
          width={50}
          height={50}
          className={styles.userImage}
        />
        <div className={styles.userInfo}>
          <p className={styles.username}>Hello, Admin</p>
          <p className={styles.userTitle}>Dashboard</p>
        </div>
      </div>

      <div className={styles.menu}>
        {menuItems.map((section) => (
          <div key={section.title} className={styles.section}>
            <h4 className={styles.sectionTitle}>{section.title}</h4>
            <ul className={styles.list}>
              {section.list.map((item) => (
                <li key={item.title}>
                  <Menulink item={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  )
}