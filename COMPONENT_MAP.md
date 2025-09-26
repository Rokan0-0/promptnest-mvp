# Component Map - PromptNest MVP

Based on the design inventory from Figma tokens, here's the complete component mapping for the React application.

## 🧭 Navigation Components

### **Navbar** → `components/layout/Navbar.tsx`
- **Props**: `{ user?: User, onMenuClick?: () => void }`
- **Pages**: All pages
- **Dependencies**: `@/components/ui/Button`, `@/components/ui/Avatar`, `@/components/ui/DropdownMenu`

### **DesktopSidebar** → `components/layout/DesktopSidebar.tsx`
- **Props**: `{ isCollapsed?: boolean, onToggle?: () => void, currentPath?: string }`
- **Pages**: Home, Explore, My Prompts, Saved
- **Dependencies**: `@/components/ui/Button`, `@/components/ui/Tooltip`, `@/components/ui/Separator`

### **MobileBottomNav** → `components/layout/MobileBottomNav.tsx`
- **Props**: `{ currentPath?: string }`
- **Pages**: Home, Explore, My Prompts, Saved
- **Dependencies**: `@/components/ui/Button`

## 📄 Page Components

### **FeedPage** → `components/pages/FeedPage.tsx`
- **Props**: `{ prompts: Prompt[], isLoading?: boolean, onLoadMore?: () => void }`
- **Pages**: Home, Explore, My Prompts, Saved
- **Dependencies**: `@/components/cards/PromptCard`, `@/components/ui/Skeleton`

### **PromptDetailsPage** → `components/pages/PromptDetailsPage.tsx`
- **Props**: `{ prompt: Prompt, onEdit?: () => void, onDelete?: () => void }`
- **Pages**: Prompt Details
- **Dependencies**: `@/components/cards/PromptCard`, `@/components/ui/Button`, `@/components/ui/DropdownMenu`

### **CreatePromptPage** → `components/pages/CreatePromptPage.tsx`
- **Props**: `{ onSubmit?: (data: CreatePromptData) => void, isLoading?: boolean }`
- **Pages**: Create Prompt
- **Dependencies**: `@/components/ui/Input`, `@/components/ui/Textarea`, `@/components/ui/Button`, `@/components/ui/Label`

### **NotificationsPage** → `components/pages/NotificationsPage.tsx`
- **Props**: `{ notifications: Notification[], onMarkAsRead?: (id: string) => void }`
- **Pages**: Notifications
- **Dependencies**: `@/components/ui/Badge`, `@/components/ui/Button`

### **SettingsPage** → `components/pages/SettingsPage.tsx`
- **Props**: `{ user: User, onSave?: (data: UserSettings) => void }`
- **Pages**: Settings
- **Dependencies**: `@/components/ui/Tabs`, `@/components/ui/Input`, `@/components/ui/Switch`, `@/components/ui/Select`

## 🃏 Card Components

### **PromptCard** → `components/cards/PromptCard.tsx`
- **Props**: `{ prompt: Prompt, onFavorite?: () => void, onRun?: () => void, onShare?: () => void }`
- **Pages**: Home, Explore, My Prompts, Saved
- **Dependencies**: `@/components/ui/Button`, `@/components/ui/Avatar`, `@/components/ui/Badge`, `@/components/ui/DropdownMenu`

## 🖼️ Media Components

### **ImageWithFallback** → `components/media/ImageWithFallback.tsx`
- **Props**: `{ src: string, alt: string, fallback?: React.ReactNode, className?: string }`
- **Pages**: Various components for images
- **Dependencies**: `@/components/ui/Skeleton`

## 🎛️ Form Components

### **Button** → `components/ui/Button.tsx`
- **Props**: `{ variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'link', size?: 'sm' | 'md' | 'lg', disabled?: boolean, loading?: boolean, children: React.ReactNode, onClick?: () => void }`
- **Pages**: All pages - various actions
- **Dependencies**: None

### **Input** → `components/ui/Input.tsx`
- **Props**: `{ type?: string, placeholder?: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void, error?: string, disabled?: boolean }`
- **Pages**: Create Prompt, Settings, Search
- **Dependencies**: `@/components/ui/Label`

### **Textarea** → `components/ui/Textarea.tsx`
- **Props**: `{ placeholder?: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, error?: string, disabled?: boolean, rows?: number }`
- **Pages**: Create Prompt, Settings
- **Dependencies**: `@/components/ui/Label`

### **Select** → `components/ui/Select.tsx`
- **Props**: `{ options: SelectOption[], value?: string, onChange?: (value: string) => void, placeholder?: string, disabled?: boolean }`
- **Pages**: Settings, Filters
- **Dependencies**: None

### **Checkbox** → `components/ui/Checkbox.tsx`
- **Props**: `{ checked?: boolean, onChange?: (checked: boolean) => void, disabled?: boolean, label?: string }`
- **Pages**: Settings, Multi-select
- **Dependencies**: `@/components/ui/Label`

### **RadioGroup** → `components/ui/RadioGroup.tsx`
- **Props**: `{ options: RadioOption[], value?: string, onChange?: (value: string) => void, disabled?: boolean }`
- **Pages**: Settings, Form options
- **Dependencies**: `@/components/ui/Label`

### **Switch** → `components/ui/Switch.tsx`
- **Props**: `{ checked?: boolean, onChange?: (checked: boolean) => void, disabled?: boolean, label?: string }`
- **Pages**: Settings
- **Dependencies**: `@/components/ui/Label`

### **Slider** → `components/ui/Slider.tsx`
- **Props**: `{ value?: number, onChange?: (value: number) => void, min?: number, max?: number, step?: number, disabled?: boolean }`
- **Pages**: Settings ranges
- **Dependencies**: None

### **Label** → `components/ui/Label.tsx`
- **Props**: `{ htmlFor?: string, children: React.ReactNode, required?: boolean }`
- **Pages**: Forms - Create Prompt, Settings
- **Dependencies**: None

## 🎨 Layout Components

### **Card** → `components/ui/Card.tsx`
- **Props**: `{ children: React.ReactNode, className?: string, hover?: boolean }`
- **Pages**: All pages - content containers
- **Dependencies**: None

### **Separator** → `components/ui/Separator.tsx`
- **Props**: `{ orientation?: 'horizontal' | 'vertical', className?: string }`
- **Pages**: Settings, Various layouts
- **Dependencies**: None

### **Tabs** → `components/ui/Tabs.tsx`
- **Props**: `{ tabs: Tab[], activeTab?: string, onTabChange?: (tab: string) => void }`
- **Pages**: Settings sections
- **Dependencies**: None

### **Accordion** → `components/ui/Accordion.tsx`
- **Props**: `{ items: AccordionItem[], allowMultiple?: boolean }`
- **Pages**: FAQ, Grouped content
- **Dependencies**: None

### **Collapsible** → `components/ui/Collapsible.tsx`
- **Props**: `{ children: React.ReactNode, trigger: React.ReactNode, open?: boolean, onOpenChange?: (open: boolean) => void }`
- **Pages**: Expandable sections
- **Dependencies**: None

## 👤 User Components

### **Avatar** → `components/ui/Avatar.tsx`
- **Props**: `{ src?: string, alt?: string, fallback?: string, size?: 'sm' | 'md' | 'lg', className?: string }`
- **Pages**: Navbar, Settings, Prompt Cards
- **Dependencies**: `@/components/media/ImageWithFallback`

## 🏷️ Display Components

### **Badge** → `components/ui/Badge.tsx`
- **Props**: `{ variant?: 'default' | 'secondary' | 'destructive' | 'outline', children: React.ReactNode }`
- **Pages**: Prompt Cards, Notifications
- **Dependencies**: None

### **Tooltip** → `components/ui/Tooltip.tsx`
- **Props**: `{ content: React.ReactNode, children: React.ReactNode, side?: 'top' | 'bottom' | 'left' | 'right' }`
- **Pages**: Desktop Sidebar, Action buttons
- **Dependencies**: None

### **Progress** → `components/ui/Progress.tsx`
- **Props**: `{ value?: number, max?: number, className?: string }`
- **Pages**: Upload progress, Loading states
- **Dependencies**: None

### **Skeleton** → `components/ui/Skeleton.tsx`
- **Props**: `{ className?: string, children?: React.ReactNode }`
- **Pages**: Loading states
- **Dependencies**: None

## 🎭 Overlay Components

### **Dialog** → `components/ui/Dialog.tsx`
- **Props**: `{ open?: boolean, onOpenChange?: (open: boolean) => void, children: React.ReactNode, title?: string }`
- **Pages**: Create Prompt confirmations
- **Dependencies**: None

### **Sheet** → `components/ui/Sheet.tsx`
- **Props**: `{ open?: boolean, onOpenChange?: (open: boolean) => void, children: React.ReactNode, side?: 'left' | 'right' | 'top' | 'bottom' }`
- **Pages**: Mobile overlays
- **Dependencies**: None

### **Popover** → `components/ui/Popover.tsx`
- **Props**: `{ open?: boolean, onOpenChange?: (open: boolean) => void, children: React.ReactNode, content: React.ReactNode }`
- **Pages**: Context menus, Info displays
- **Dependencies**: None

### **HoverCard** → `components/ui/HoverCard.tsx`
- **Props**: `{ children: React.ReactNode, content: React.ReactNode, openDelay?: number }`
- **Pages**: User previews, Quick info
- **Dependencies**: None

### **AlertDialog** → `components/ui/AlertDialog.tsx`
- **Props**: `{ open?: boolean, onOpenChange?: (open: boolean) => void, title?: string, description?: string, onConfirm?: () => void }`
- **Pages**: Destructive actions
- **Dependencies**: None

### **Drawer** → `components/ui/Drawer.tsx`
- **Props**: `{ open?: boolean, onOpenChange?: (open: boolean) => void, children: React.ReactNode, side?: 'left' | 'right' | 'top' | 'bottom' }`
- **Pages**: Mobile sheets
- **Dependencies**: None

## 🎯 Interactive Components

### **DropdownMenu** → `components/ui/DropdownMenu.tsx`
- **Props**: `{ children: React.ReactNode, items: DropdownMenuItem[], align?: 'start' | 'center' | 'end' }`
- **Pages**: Navbar, Prompt Cards
- **Dependencies**: None

### **Toggle** → `components/ui/Toggle.tsx`
- **Props**: `{ pressed?: boolean, onPressedChange?: (pressed: boolean) => void, children: React.ReactNode }`
- **Pages**: View options
- **Dependencies**: None

### **ToggleGroup** → `components/ui/ToggleGroup.tsx`
- **Props**: `{ items: ToggleGroupItem[], value?: string, onValueChange?: (value: string) => void }`
- **Pages**: Multiple toggles
- **Dependencies**: None

### **Menubar** → `components/ui/Menubar.tsx`
- **Props**: `{ items: MenubarItem[], children: React.ReactNode }`
- **Pages**: Context actions
- **Dependencies**: None

### **NavigationMenu** → `components/ui/NavigationMenu.tsx`
- **Props**: `{ items: NavigationMenuItem[], children: React.ReactNode }`
- **Pages**: Complex navigation
- **Dependencies**: None

### **ContextMenu** → `components/ui/ContextMenu.tsx`
- **Props**: `{ children: React.ReactNode, items: ContextMenuItem[] }`
- **Pages**: Right-click actions
- **Dependencies**: None

## 📊 Data Components

### **Table** → `components/ui/Table.tsx`
- **Props**: `{ columns: TableColumn[], data: any[], onRowClick?: (row: any) => void }`
- **Pages**: Data display - if implemented
- **Dependencies**: None

### **Pagination** → `components/ui/Pagination.tsx`
- **Props**: `{ currentPage: number, totalPages: number, onPageChange: (page: number) => void }`
- **Pages**: Feed pagination
- **Dependencies**: None

### **Breadcrumb** → `components/ui/Breadcrumb.tsx`
- **Props**: `{ items: BreadcrumbItem[], separator?: string }`
- **Pages**: Navigation context
- **Dependencies**: None

## 🎨 Media Components

### **Carousel** → `components/ui/Carousel.tsx`
- **Props**: `{ items: CarouselItem[], autoplay?: boolean, showDots?: boolean }`
- **Pages**: Image galleries
- **Dependencies**: None

### **AspectRatio** → `components/ui/AspectRatio.tsx`
- **Props**: `{ ratio: number, children: React.ReactNode }`
- **Pages**: Media containers
- **Dependencies**: None

## 🔧 Utility Components

### **ScrollArea** → `components/ui/ScrollArea.tsx`
- **Props**: `{ children: React.ReactNode, className?: string }`
- **Pages**: Long content lists
- **Dependencies**: None

### **Resizable** → `components/ui/Resizable.tsx`
- **Props**: `{ children: React.ReactNode, defaultSize?: { width: number, height: number } }`
- **Pages**: Layout panels
- **Dependencies**: None

### **Calendar** → `components/ui/Calendar.tsx`
- **Props**: `{ value?: Date, onChange?: (date: Date) => void, disabled?: (date: Date) => boolean }`
- **Pages**: Date pickers - if implemented
- **Dependencies**: None

### **Command** → `components/ui/Command.tsx`
- **Props**: `{ placeholder?: string, onSelect?: (value: string) => void, items: CommandItem[] }`
- **Pages**: Search functionality
- **Dependencies**: None

### **Form** → `components/ui/Form.tsx`
- **Props**: `{ children: React.ReactNode, onSubmit?: (data: any) => void, validationSchema?: any }`
- **Pages**: All form pages
- **Dependencies**: None

### **InputOTP** → `components/ui/InputOTP.tsx`
- **Props**: `{ value?: string, onChange?: (value: string) => void, length?: number }`
- **Pages**: Security features
- **Dependencies**: None

### **Alert** → `components/ui/Alert.tsx`
- **Props**: `{ variant?: 'default' | 'destructive', title?: string, description?: string, children?: React.ReactNode }`
- **Pages**: System messages
- **Dependencies**: None

### **Sonner** → `components/ui/Sonner.tsx`
- **Props**: `{ position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' }`
- **Pages**: Toast notifications - All pages
- **Dependencies**: None

### **Chart** → `components/ui/Chart.tsx`
- **Props**: `{ data: ChartData[], type: 'line' | 'bar' | 'pie', options?: ChartOptions }`
- **Pages**: Analytics - if implemented
- **Dependencies**: None

## 📁 File Structure

```
components/
├── layout/
│   ├── Navbar.tsx
│   ├── DesktopSidebar.tsx
│   └── MobileBottomNav.tsx
├── pages/
│   ├── FeedPage.tsx
│   ├── PromptDetailsPage.tsx
│   ├── CreatePromptPage.tsx
│   ├── NotificationsPage.tsx
│   └── SettingsPage.tsx
├── cards/
│   └── PromptCard.tsx
├── media/
│   └── ImageWithFallback.tsx
└── ui/
    ├── Button.tsx
    ├── Input.tsx
    ├── Textarea.tsx
    ├── Select.tsx
    ├── Checkbox.tsx
    ├── RadioGroup.tsx
    ├── Switch.tsx
    ├── Label.tsx
    ├── Card.tsx
    ├── Separator.tsx
    ├── Tabs.tsx
    ├── Accordion.tsx
    ├── Collapsible.tsx
    ├── Avatar.tsx
    ├── Badge.tsx
    ├── Tooltip.tsx
    ├── Progress.tsx
    ├── Skeleton.tsx
    ├── Dialog.tsx
    ├── Sheet.tsx
    ├── Popover.tsx
    ├── HoverCard.tsx
    ├── AlertDialog.tsx
    ├── Drawer.tsx
    ├── DropdownMenu.tsx
    ├── Toggle.tsx
    ├── ToggleGroup.tsx
    ├── Menubar.tsx
    ├── NavigationMenu.tsx
    ├── ContextMenu.tsx
    ├── Table.tsx
    ├── Pagination.tsx
    ├── Breadcrumb.tsx
    ├── Carousel.tsx
    ├── AspectRatio.tsx
    ├── ScrollArea.tsx
    ├── Resizable.tsx
    ├── Calendar.tsx
    ├── Command.tsx
    ├── Form.tsx
    ├── InputOTP.tsx
    ├── Alert.tsx
    ├── Sonner.tsx
    └── Chart.tsx
```

## 🎯 Implementation Priority

### **Phase 1 - Core Components**
1. Button, Input, Textarea, Label
2. Card, Separator
3. Avatar, Badge
4. Navbar, DesktopSidebar, MobileBottomNav

### **Phase 2 - Layout Components**
1. Tabs, Accordion, Collapsible
2. Dialog, Sheet, Popover
3. DropdownMenu, Toggle

### **Phase 3 - Advanced Components**
1. Table, Pagination, Breadcrumb
2. Carousel, AspectRatio
3. Chart, Calendar, Command

### **Phase 4 - Utility Components**
1. ScrollArea, Resizable
2. Form, InputOTP, Alert
3. Sonner, Tooltip, HoverCard

## 🔗 Dependencies

### **Required Packages**
```json
{
  "@radix-ui/react-accordion": "^1.1.2",
  "@radix-ui/react-alert-dialog": "^1.0.5",
  "@radix-ui/react-aspect-ratio": "^1.0.3",
  "@radix-ui/react-avatar": "^1.0.4",
  "@radix-ui/react-checkbox": "^1.0.4",
  "@radix-ui/react-collapsible": "^1.0.3",
  "@radix-ui/react-context-menu": "^2.1.5",
  "@radix-ui/react-dialog": "^1.0.5",
  "@radix-ui/react-dropdown-menu": "^2.0.6",
  "@radix-ui/react-hover-card": "^1.0.7",
  "@radix-ui/react-label": "^2.0.2",
  "@radix-ui/react-menubar": "^1.0.4",
  "@radix-ui/react-navigation-menu": "^1.1.4",
  "@radix-ui/react-popover": "^1.0.7",
  "@radix-ui/react-progress": "^1.0.3",
  "@radix-ui/react-radio-group": "^1.1.3",
  "@radix-ui/react-scroll-area": "^1.0.5",
  "@radix-ui/react-select": "^2.0.0",
  "@radix-ui/react-separator": "^1.0.3",
  "@radix-ui/react-slider": "^1.1.2",
  "@radix-ui/react-switch": "^1.0.3",
  "@radix-ui/react-tabs": "^1.0.4",
  "@radix-ui/react-toast": "^1.1.5",
  "@radix-ui/react-toggle": "^1.0.3",
  "@radix-ui/react-toggle-group": "^1.0.4",
  "@radix-ui/react-tooltip": "^1.0.7",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "lucide-react": "^0.294.0",
  "sonner": "^1.2.4",
  "tailwind-merge": "^2.0.0"
}
```

This component map provides a complete roadmap for implementing all the design components from your Figma tokens into a scalable React component library! 🚀
