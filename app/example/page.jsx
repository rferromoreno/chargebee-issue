import ModalContainer from "@/components/ModalContainer";
// Forcing the page to be SSR
export const dynamic = 'force-dynamic';

export default async function ExamplePage() {
  return (
    <>
      <div>This is a Example Page</div>
      <ModalContainer />
    </>
  )
}