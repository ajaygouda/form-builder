import { redirect } from 'next/navigation';

export default function Page(props:any) {
  redirect(`/campaigns/${props.id}/form`);
}
