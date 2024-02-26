import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongsbyUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  // get session
  const {
    data: sessionData,
    error: sessionError
  } = await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError.message);
    return [];
  }

  // get songs by user id
  const { data: songData, error: songError } = await supabase
    .from('songs')
    .select('*')
    .eq('user_id', sessionData.session?.user.id)
    .order('created_at', { ascending: false });

  if (songError) {
    console.log(songError.message);

  }
  return (songData as any) || [];

};

export default getSongsbyUserId;