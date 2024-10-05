import { Search } from 'lucide-react'

import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Home() {
  return (
    <div>
      <Header />

      <div className="container">
        <div className={`
          mx-auto w-full

          lg:w-3/4
        `}>
          <h1 className="my-8 text-2xl">Environments</h1>
          <div className="flex h-10 w-96 items-center gap-2">
            <Input placeholder="Search" className="h-full flex-1" />
            <Button className="aspect-square">
              <Search size={14} />
            </Button>
          </div>

          <Table className="mt-4">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow className="border">
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border">
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
