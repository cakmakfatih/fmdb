import { MaxWidthLayout } from "../../layout/MainLayout";

export default function ListSection({ title }: { title: string; }) {
    return (
        <section className="py-4 flex items-center justify-center">
            <MaxWidthLayout className="text-white px-6 flex-col items-stretch">
                <header className="border-b border-white/[0.24]">
                    <h1 className="text-3xl p-4">{ title }</h1>
                </header>
                <section>
                    <div className="h-64">

                    </div>
                </section>
            </MaxWidthLayout>
        </section>
    );
}