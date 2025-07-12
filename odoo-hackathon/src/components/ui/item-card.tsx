import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Coins, Heart } from 'lucide-react'

interface ItemCardProps {
  item: {
    id: string
    title: string
    images: string
    condition: string
    pointValue: number
    category: string
    size: string
    user: {
      name: string | null
    }
  }
}

export function ItemCard({ item }: ItemCardProps) {
  const getConditionColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'excellent':
        return 'bg-emerald-100 text-emerald-800'
      case 'good':
        return 'bg-blue-100 text-blue-800'
      case 'fair':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={item.images}
          alt={item.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1">
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
            {item.title}
          </h3>
          <div className="flex items-center space-x-1 text-emerald-600">
            <Coins className="h-4 w-4" />
            <span className="font-semibold">{item.pointValue}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {item.category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            Size {item.size}
          </Badge>
          <Badge className={`text-xs ${getConditionColor(item.condition)}`}>
            {item.condition}
          </Badge>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">
          Listed by {item.user.name}
        </p>
        
        <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Link href={`/items/${item.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  )
}