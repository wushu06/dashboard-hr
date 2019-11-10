@if(auth()->check() && $notifications = auth()->user()->unreadNotifications)

    <div class="text-center" style="position: absolute; top: 12px; right: 8px;">
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn
                        color="secondary"
                        dark
                        v-on="on"
                >
                    <i class="fas fa-bell"></i>
                </v-btn>
            </template>
            <v-list>
                @forelse( $notifications as $notification)
                    @if(!$notification->read_at)
                        <v-list-item link>

                            <v-list-item-title>
                                <a href="{{$notification->data['link']}}">{{$notification->data['message']}}</a>
                            </v-list-item-title>
                            <v-list-item-icon>
                                <form method="POST"
                                      action="/profiles/{{auth()->id()}}/notifications/{{$notification->id}}">
                                    {{csrf_field()}}
                                    {{method_field('delete')}}
                                    <button class="btn" type="submit">
                                        <v-icon>mdi-delete</v-icon>
                                    </button>
                                </form>
                            </v-list-item-icon>
                        </v-list-item>

                    @endif
                @empty
                    <v-list-item link>

                        <v-list-item-title>
                            No notifications
                        </v-list-item-title>
                    </v-list-item>
                @endforelse

            </v-list>
        </v-menu>
    </div>
@endif