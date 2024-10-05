import { ChevronDown, Copy, Search, Trash } from 'lucide-react'
import Image from 'next/image'
import { v4 as uuid } from 'uuid'

import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const hubItems = [
  {
    id: uuid(),
    name: 'test',
    scope: 'private',
    owner: {
      avatar: 'https://github.com/shadcn.png',
      username: 'Cao Dang Tinh',
      tag: '@DangTinh422003',
    },
    systems: [
      'aarch64-darwin',
      'aarch64-linux',
      'x86_64-linux',
      'x86_64-linux',
      'x86_64-windows',
    ],
  },
  {
    id: uuid(),
    name: 'test',
    scope: 'private',
    owner: {
      avatar: 'https://github.com/shadcn.png',
      username: 'Tinh Dep Trai',
      tag: '@DangTinh422003',
    },
    systems: [
      'aarch64-darwin',
      'aarch64-linux',
      'x86_64-linux',
      'x86_64-windows',
    ],
  },
  {
    id: uuid(),
    name: 'test',
    scope: 'private',
    owner: {
      avatar: 'https://github.com/shadcn.png',
      username: '404 Not Found',
      tag: '@DangTinh422003',
    },
    systems: ['aarch64-darwin', 'aarch64-linux', 'x86_64-linux'],
  },
]

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
          <div className="flex h-10 w-1/3 items-center gap-2">
            <Input placeholder="Search" className="h-full flex-1 px-4" />
            <Button>
              <Search size={20} />
            </Button>
          </div>

          <Table className="mt-4">
            <TableCaption>A list of your hub.</TableCaption>
            <TableHeader>
              <TableRow className="border">
                <TableHead className="p-4 font-semibold text-black">
                  Name
                </TableHead>
                <TableHead className="p-4 font-semibold text-black">
                  Owner
                </TableHead>
                <TableHead className="w-1/2 p-4 font-semibold text-black">
                  Systems
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="border">
              {hubItems.map((hub) => (
                <TableRow className="border" key={hub.id}>
                  <TableCell
                    className={`flex w-1/4 items-center gap-2 p-4 font-medium`}
                  >
                    <span>{hub.name}</span>
                    <span
                      className={`
                        rounded-md bg-[#f8f7fa] px-2 py-1 capitalize
                        text-[#4b4851]
                      `}
                    >
                      {hub.scope}
                    </span>
                  </TableCell>
                  <TableCell className="w-1/4 p-4">
                    <div className="flex items-center gap-2">
                      <Image
                        width={40}
                        height={40}
                        src={hub.owner.avatar}
                        className="size-10 rounded-full"
                        alt=""
                      />
                      <div className="flex flex-col justify-center">
                        <p className="font-semibold text-[#4b4851]">
                          {hub.owner.username}
                        </p>
                        <p className="text-[#4b4851]">{hub.owner.tag}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="grid grid-cols-3 gap-4 p-4">
                    <div className="col-span-2">
                      <div className="flex flex-wrap gap-1">
                        {hub.systems.map((system) => (
                          <p
                            key={system}
                            className={`
                              h-auto rounded-md border px-2 py-1 text-xs
                            `}
                          >
                            {system}
                          </p>
                        ))}
                      </div>
                    </div>
                    <Popover>
                      <div className="flex items-center justify-end">
                        <div
                          className={`
                            flex size-10 cursor-pointer items-center
                            justify-center rounded-full

                            hover:bg-gray-100
                          `}
                        >
                          <Trash size={16} className="text-red-500" />
                        </div>
                        <PopoverTrigger asChild>
                          <Button
                            variant={'ghost'}
                            className={`flex items-center gap-x-1 text-wrap`}
                          >
                            <span>More</span>
                            <ChevronDown size={16} />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          side="bottom"
                          align="end"
                          className="w-96"
                        >
                          <div className="flex h-10 gap-1">
                            <p className={`
                              flex h-full flex-1 items-center rounded-sm border
                              p-2 font-geist-mono text-sm text-gray-700
                            `}>
                              flox pull DangTinh422003/test
                            </p>
                            <Button
                              variant={'ghost'}
                              className={`
                                aspect-square flex items-center justify-center
                                border
                              `}
                            >
                              <Copy size={14} />
                            </Button>
                          </div>
                        </PopoverContent>
                      </div>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
