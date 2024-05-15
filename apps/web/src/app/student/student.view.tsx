import { Sidebar } from './components/sidebar';
import { Calendar } from './components/calendar';
import { Header } from '@/common/components/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/common/components/ui/card';
import { ChatBubbleIcon, DrawingPinIcon, Pencil2Icon } from '@radix-ui/react-icons';

export function StudentView() {
  return (
    <main className="flex flex-1 flex-row p-3 gap-3 h-screen">
      <div className="bg-background rounded-md h-full">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col bg-background rounded-md overflow-auto overflow-x-hidden">
        <Header />
        <div className="flex flex-1 items-center justify-center flex-col gap-8 px-16 pb-16">
          <div className="w-full flex items-center justify-between">
            <Card className="min-w-[30%] h-full">
              <CardHeader>
                <CardTitle className="flex text-lg items-center justify-center gap-2">
                  <Pencil2Icon width={18} height={18} />
                  Atividades
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div>
                  <p>Concluídas</p>
                  <CardDescription>0</CardDescription>
                </div>
                <div>
                  <p>A fazer</p>
                  <CardDescription>0</CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card className="min-w-[30%] h-full">
              <CardHeader>
                <CardTitle className="flex text-lg items-center justify-center gap-2">
                  <DrawingPinIcon width={18} height={18} />
                  Comunicados
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div>
                  <p>Visualizados</p>
                  <CardDescription>0</CardDescription>
                </div>
                <div>
                  <p>Não lidos</p>
                  <CardDescription>0</CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card className="min-w-[30%] h-full">
              <CardHeader>
                <CardTitle className="flex text-lg items-center justify-center gap-2">
                  <ChatBubbleIcon width={18} height={18} />
                  Conversar
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div>
                  <p>Mensagens</p>
                  <CardDescription>0</CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="w-full min-h-[50rem]">
            <Calendar />
          </div>
        </div>
      </div>
    </main>
  );
}
