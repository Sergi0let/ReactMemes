/* eslint-disable @next/next/no-img-element */
"use client"

import { Button } from "@heroui/button"
import { Chip } from "@heroui/chip"
import { Input } from "@heroui/input"
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal"
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table"
import { Tooltip } from "@heroui/tooltip"
import React, { useEffect, useState } from "react"

import { columns } from "@/constants"
import { useMemes } from "@/hooks"
import { isValidJpgUrl } from "@/libs/utils"
import { MemeType } from "@/types"

export const EditIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
  >
    <path
      d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d="M2.5 18.3333H17.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
)

const TableMemes = () => {
  const { memes, updateMeme } = useMemes()
  const [isClient, setIsClient] = useState(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [activeMeme, setActiveMeme] = useState<MemeType | null>(null)
  const [title, setTitle] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [likes, setLikes] = useState("0")
  const [imageError, setImageError] = useState("")

  const isUnchanged =
    title === activeMeme?.title &&
    imageUrl === activeMeme?.imgUrl &&
    likes === activeMeme?.likes

  const isFormValid =
    title.trim() !== "" &&
    title.length >= 3 &&
    title.length <= 100 &&
    isValidJpgUrl(imageUrl) &&
    !isNaN(Number(likes)) &&
    Number(likes) >= 0 &&
    Number(likes) <= 99

  const handleEdit = (meme: MemeType) => {
    setActiveMeme(meme)
    setTitle(meme.title)
    setImageUrl(meme.imgUrl)
    setLikes(meme.likes)
    onOpen()
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  const renderCell = React.useCallback(
    (meme: MemeType, columnKey: keyof MemeType) => {
      const cellValue = meme[columnKey]

      switch (columnKey) {
        case "imgUrl":
          return (
            <Tooltip content={cellValue}>
              <figure className="size-16 rounded overflow-hidden shadow-md">
                <img
                  alt={meme.title}
                  className="w-full h-full object-cover"
                  src={cellValue as string}
                />
              </figure>
            </Tooltip>
          )
        case "title":
          return <p className="text-bold text-sm capitalize">{cellValue}</p>
        case "likes":
          return (
            <Chip className="capitalize" size="sm" variant="flat">
              {cellValue}
            </Chip>
          )
        case "actions":
          return (
            <Tooltip content="Edit meme">
              <Button isIconOnly onPress={() => handleEdit(meme)}>
                <EditIcon />
              </Button>
            </Tooltip>
          )
        default:
          return cellValue
      }
    },
    [],
  )

  const handleSave = () => {
    if (!activeMeme) return

    if (!isValidJpgUrl(imageUrl)) {
      setImageError("Please enter a valid image URL ending in .jpg, .png, etc.")

      return
    }

    updateMeme({
      ...activeMeme,
      title,
      imgUrl: imageUrl,
      likes,
    })
    onOpenChange()
  }

  if (!isClient)
    return (
      <Table aria-label="skeletons">
        <TableHeader>
          <TableColumn>IMAGE</TableColumn>
          <TableColumn>TITLE</TableColumn>
          <TableColumn>LIKES</TableColumn>
          <TableColumn>ID</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
      </Table>
    )

  return (
    <>
      <Table aria-label="Meme Table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={memes}>
          {(item: MemeType) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey as keyof MemeType)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Edit Meme</ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <Input
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {title.trim() === "" && (
                  <p className="text-yellow-600 text-sm">
                    Назва не може бути пустою
                  </p>
                )}

                <Input
                  label="Image URL"
                  value={imageUrl}
                  onChange={(e) => {
                    setImageUrl(e.target.value)
                    if (imageError) setImageError("")
                  }}
                />
                {imageError && (
                  <p className="text-red-500 text-sm">{imageError}</p>
                )}
                {!imageError && !isValidJpgUrl(imageUrl) && imageUrl !== "" && (
                  <p className="text-yellow-600 text-sm">
                    URL має закінчуватись на .jpg / .png
                  </p>
                )}

                <Input
                  label="Likes"
                  type="number"
                  value={likes}
                  onChange={(e) => setLikes(e.target.value)}
                />
                {Number(likes) < 0 && (
                  <p className="text-yellow-600 text-sm">
                    Лайки не можуть бути менше 0
                  </p>
                )}
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  isDisabled={!isFormValid || isUnchanged}
                  onPress={handleSave}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export { TableMemes }
