export interface User {
  id: string
  name: string
  email: string
  points: number
  role: 'USER' | 'ADMIN'
  createdAt: string
}

export interface Item {
  id: string
  title: string
  description: string
  category: string
  type: string
  size: string
  condition: string
  tags: string
  images: string
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'AVAILABLE' | 'SWAPPED'
  pointValue: number
  userId: string
  user: { name: string }
  createdAt: string
}

export interface Swap {
  id: string
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'COMPLETED'
  type: 'DIRECT_SWAP' | 'POINT_REDEMPTION'
  pointsUsed?: number
  requesterId: string
  itemId: string
  item: Item
  createdAt: string
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@rewear.com',
    points: 1000,
    role: 'ADMIN',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    points: 150,
    role: 'USER',
    createdAt: '2024-01-02T00:00:00Z'
  },
  {
    id: '3',
    name: 'Mike Chen',
    email: 'mike@example.com',
    points: 200,
    role: 'USER',
    createdAt: '2024-01-03T00:00:00Z'
  },
  {
    id: '4',
    name: 'Emma Davis',
    email: 'emma@example.com',
    points: 120,
    role: 'USER',
    createdAt: '2024-01-04T00:00:00Z'
  },
  {
    id: '5',
    name: 'Alex Rodriguez',
    email: 'alex@example.com',
    points: 180,
    role: 'USER',
    createdAt: '2024-01-05T00:00:00Z'
  }
]

export const mockItems: Item[] = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    description: 'Classic blue denim jacket in excellent condition. Perfect for layering in any season.',
    category: 'Outerwear',
    type: 'Jacket',
    size: 'M',
    condition: 'Excellent',
    tags: 'vintage,denim,casual,blue',
    pointValue: 45,
    status: 'APPROVED',
    images: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    userId: '2',
    user: { name: 'Sarah Johnson' },
    createdAt: '2024-01-10T00:00:00Z'
  },
  {
    id: '2',
    title: 'Black Wool Coat',
    description: 'Elegant black wool coat, barely worn. Great for professional settings and cold weather.',
    category: 'Outerwear',
    type: 'Coat',
    size: 'L',
    condition: 'Excellent',
    tags: 'wool,black,professional,warm',
    pointValue: 50,
    status: 'APPROVED',
    images: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
    userId: '3',
    user: { name: 'Mike Chen' },
    createdAt: '2024-01-11T00:00:00Z'
  },
  {
    id: '3',
    title: 'Summer Floral Dress',
    description: 'Light and airy floral dress perfect for summer occasions and casual outings.',
    category: 'Dresses',
    type: 'Casual Dress',
    size: 'S',
    condition: 'Good',
    tags: 'floral,summer,casual,light',
    pointValue: 30,
    status: 'APPROVED',
    images: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg',
    userId: '4',
    user: { name: 'Emma Davis' },
    createdAt: '2024-01-12T00:00:00Z'
  },
  {
    id: '4',
    title: 'Designer Handbag',
    description: 'Authentic designer leather handbag with minimal wear. Perfect for any occasion.',
    category: 'Accessories',
    type: 'Handbag',
    size: 'One Size',
    condition: 'Good',
    tags: 'designer,leather,handbag,luxury',
    pointValue: 40,
    status: 'APPROVED',
    images: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg',
    userId: '5',
    user: { name: 'Alex Rodriguez' },
    createdAt: '2024-01-13T00:00:00Z'
  },
  {
    id: '5',
    title: 'Running Sneakers',
    description: 'Comfortable running shoes, lightly used. Great for workouts and casual wear.',
    category: 'Shoes',
    type: 'Athletic',
    size: '9',
    condition: 'Good',
    tags: 'running,athletic,comfortable,sports',
    pointValue: 25,
    status: 'APPROVED',
    images: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
    userId: '2',
    user: { name: 'Sarah Johnson' },
    createdAt: '2024-01-14T00:00:00Z'
  },
  {
    id: '6',
    title: 'Silk Blouse',
    description: 'Beautiful silk blouse in cream color. Perfect for office wear and special occasions.',
    category: 'Shirts',
    type: 'Blouse',
    size: 'M',
    condition: 'Excellent',
    tags: 'silk,cream,office,professional',
    pointValue: 35,
    status: 'APPROVED',
    images: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    userId: '3',
    user: { name: 'Mike Chen' },
    createdAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '7',
    title: 'Casual Cotton T-Shirt',
    description: 'Soft cotton t-shirt in navy blue. Great for everyday wear and layering.',
    category: 'Shirts',
    type: 'T-Shirt',
    size: 'L',
    condition: 'Good',
    tags: 'cotton,navy,casual,basic',
    pointValue: 15,
    status: 'APPROVED',
    images: 'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg',
    userId: '4',
    user: { name: 'Emma Davis' },
    createdAt: '2024-01-16T00:00:00Z'
  },
  {
    id: '8',
    title: 'High-Waisted Jeans',
    description: 'Trendy high-waisted jeans in dark wash. Flattering fit and comfortable.',
    category: 'Pants',
    type: 'Jeans',
    size: '28',
    condition: 'Excellent',
    tags: 'jeans,high-waisted,dark,trendy',
    pointValue: 35,
    status: 'APPROVED',
    images: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg',
    userId: '5',
    user: { name: 'Alex Rodriguez' },
    createdAt: '2024-01-17T00:00:00Z'
  }
]

export const mockSwaps: Swap[] = [
  {
    id: '1',
    status: 'PENDING',
    type: 'POINT_REDEMPTION',
    pointsUsed: 45,
    requesterId: '2',
    itemId: '1',
    item: mockItems[0],
    createdAt: '2024-01-20T00:00:00Z'
  },
  {
    id: '2',
    status: 'COMPLETED',
    type: 'DIRECT_SWAP',
    requesterId: '3',
    itemId: '3',
    item: mockItems[2],
    createdAt: '2024-01-18T00:00:00Z'
  }
]