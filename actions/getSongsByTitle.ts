import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getSongs from "./getSongs";

const getSongsByTitle = async (title: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  if(!title) {
    const allSongs =await getSongs();
    return allSongs;
  }

  // get songs by user id
  const { data: songData, error: songError } = await supabase
    .from('songs')
    .select('*')
    .ilike('title', `%${title}%`)
    .order('created_at', {ascending: false});

  if (songError) {
    console.log(songError.message);

  }
  return (songData as any) || [];

};

export default getSongsByTitle;