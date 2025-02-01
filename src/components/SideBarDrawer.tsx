import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Text
} from "@chakra-ui/react";


const icons = [
  {iconClass: 'fa-brands fa-facebook-f', link: 'https://www.faceboox.com'},
  {iconClass: 'fa-brands fa-x-twitter', link: 'https://www.x.com'},
  {iconClass: 'fa-brands fa-instagram', link: 'https://www.instagram.com'},
  {iconClass: 'fa-brands fa-pinterest-p', link: 'https://www.pinterest.com'},
  {iconClass: 'fa-brands fa-youtube', link: 'https://www.youtube.com'},
  {iconClass: 'fa-solid fa-house', link: '/'},
]

const SidebarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  const links = [
    {id: 1, text: 'Home', link: '/'},
    {id: 2, text: 'All Blogs', link: '/blog'},
    {id: 3, text: 'About us', link: '/about'},
];


  return (
    <>
      {/* Open Button */}
      <Button onClick={onOpen} variant="ghost">
        <i className="fa-solid fa-bars text-2xl hover:text-[var(--color-secondary-2)]"></i>
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />

        <DrawerContent 
          bg="white" 
          width={'48'} // Full width on small screens, 50% width on large screens
        >
            <DrawerHeader>
                <Flex align={'center'} gap={2} justify={'space-between'} width={'full'} margin={20}>
                <div className='h-10 w-3/4 border border-blackAlpha-500 flex items-center gap-2 px-2.5 bg-white hover:border-gray-600'>
                  <i className="fa-solid fa-magnifying-glass text-xl"></i>
                  <input 
                  type="text" 
                  placeholder='Search'
                  className='outline-none w-full placeholder:text-gray-400 text-gray-500 text-sm capitalize'
                  />
                </div>
                  <DrawerCloseButton size='xl'/>
                </Flex>
            </DrawerHeader>

          <DrawerBody className="w-[50%]">
            <ul className="space-y-5">
              {links.map(link => (
                <li className="text-[var(--color-text)] h-10 w-40 px-3 flex items-center">
                  <a key={link.id} href={link.link}>{link.text}</a>
                </li>
              ))}
            </ul>

            <div className="mx-10 sm:mx-5 s:mx-5 border-b border-[var(--color-secondary-2)]">
              <div className="flex items-center gap-3 my-3 text-xl text-[var(--color-text)]">
                  {icons.map(icon => (
                      <span className="h-6 w-6 hover:text-[var(--color-secondary-2)] hover:cursor-pointer">
                          <a href={icon.link}><i className={icon.iconClass}></i></a>
                      </span>
                  ))}
              </div>
          </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
