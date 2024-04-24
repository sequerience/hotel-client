import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  


type DashboardRoomCardProps = {
    title: string;
    description: string;
    currentName: string;
};


export default function DashboardRoomCard({ title, description, currentName }: DashboardRoomCardProps) {
    return (
        <Card className="w-[450px] divWithShadow">
        <CardContent>
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Image //Фотка
                        src='/room-photos/four-room.jpg' //ПУТЬ
                        alt='Four-Room' //ЕСЛИ НЕ ПОДГРУЗИЛОСЬ
                        width={512}
                        height={512} />
                    <Label className="card-title-text">Семейный Четырёхместный</Label>
                    <Label className="card-description-text">Стандартные четырёхместные номера оформлены в гостиной открытой планировки и располагают множеством удобств.</Label>
                </div>
                <div>
                    <div className="row">
                        <Image
                        className="icons-style"
                        src='/icons/man.png'
                        alt='ParameterIcon'
                        width={25}
                        height={25} />
                        <Label className="card-description-text">Гостей: 4</Label>
                    </div>
                    <div className="row">
                        <Image
                        className="icons-style"
                        src='/icons/eye.png'
                        alt='ParameterIcon'
                        width={25}
                        height={25} />
                        <Label className="card-description-text">Вид из окна: Вид на бассейн</Label>
                    </div>
                    <div className="row">
                        <Image
                        className="icons-style"
                        src='/icons/area.png'
                        alt='ParameterIcon'
                        width={25}
                        height={25} />
                        <Label className="card-description-text">Размер: 35 кв.м.</Label>
                    </div>
                    <div className="row">
                        <Image
                        className="icons-style"
                        src='/icons/sleeping.png'
                        alt='ParameterIcon'
                        width={25}
                        height={25} />
                        <Label className="card-description-text">Тип кровати: 4 одноместных кровати</Label>
                    </div>
                    <div className="row">
                        <Image
                        className="icons-style"
                        src='/icons/bookmark.png'
                        alt='ParameterIcon'
                        width={25}
                        height={25} />
                        <Label className="card-description-text">Категории: На четверых</Label>
                    </div>
                    <div className="row">
                        <Image
                        className="icons-style"
                        src='/icons/star.png'
                        alt='ParameterIcon'
                        width={25}
                        height={25} />
                        <Label className="card-description-text">Удобства: Бассейн, Бесплатный Wi-fi, Кондиционер, Телевизор, Фен для волос, Шезлонги и лежаки</Label>
                    </div>
                </div>
            </div>
        </CardContent>
        <CardFooter className="flex justify-between">
            <Button variant="outline" className="booking-button" >Забронировать</Button>
            
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                        <Button variant="outline">
                            <Image
                            src='/about-room.png'
                            alt='Four-Room'
                            width={24}
                            height={24} />
                        </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                            <AlertDialogTitle className="card-title-text">Семейный Четырёхместный</AlertDialogTitle>
                            <AlertDialogDescription className="card-description-text">
                            В стандартных четырёхместных номерах установлены двуспальные или односпальные кровати. Оформленные в стиле гостиной открытой планировки, они располагают множеством удобств в номере.

            Размеры номеров варьируются от 30 до 35 кв.м. Они также оснащены полностью укомплектованным мини-баром и закусками, кондиционером, двумя удобными креслами, зеркалом для макияжа, огромным шкафом, мягким ковром ручной работы и собственной ванной комнатой.

            Отличный выбор, если путешественникам интересны активный отдых и спорт.

            Кроме того, вы также можете заказать любое блюдо в любое время, поскольку мы работаем круглосуточно.
                            </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                            <AlertDialogCancel>Закрыть</AlertDialogCancel>
                            <AlertDialogAction>Забронировать</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
            </AlertDialog>
        </CardFooter>
        </Card>
    );
};